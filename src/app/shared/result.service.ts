import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Answer } from './model/answer';
import { AnswerTypeEnum } from './model/answer-type-enum';
import { Question } from './model/question';
import { Result } from './model/result';
import { ResultGroup } from './model/result-group';
import { QuestionSourceService } from './question-source.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultGroup = new Array<ResultGroup>();
  private resultSaved$ = new Subject<void>();

  constructor(private questionSourceService: QuestionSourceService) { }

  /**
   * Returns Observable that fires every time if a new result was stored
   */
  get ResultSavedObservable() {
    return this.resultSaved$.asObservable();
  }

  /**
   * Stores a new result from user for a question
   * @param question Question that was answered
   * @param result Result from user
   */
  saveResult(question: Question, result: number | string): void {
    const groupId = this.questionSourceService.getQuestionGroupIndexByQuestion(question);

    // Insert Result Group if needed
    if (!this.resultGroup[groupId]) {
      this.resultGroup[groupId] = {
        QuestionGroup: this.questionSourceService.QuestionGroups[groupId],
        Results: new Array<Result>()
      };
    }

    // Determine Answer
    const questionId = this.questionSourceService.getQuestionIndexInQuestionGroup(question);
    let resultedanswer: Answer;
    switch (question.AnswerType) {
      case AnswerTypeEnum.EqualOrLess:
        resultedanswer = question.Answers.find((answer, index) => <number>result <= <number>answer.Answer && (index === question.Answers.length - 1 || <number>result > <number>question.Answers[index + 1].Answer));
        break;
      case AnswerTypeEnum.Equal:
        resultedanswer = question.Answers.find(a => a.Answer == result);
        break;
    }

    if (!resultedanswer) {
      throw new Error(`Userinput matches to no answer: ${result}`);
    }

    // Set Result
    this.resultGroup[groupId].Results[questionId] = { Question: question, ResultetValue: result, ResultetAnswer: resultedanswer };
    this.resultSaved$.next();
  }

  /**
   * Check if all questions of a group are answered
   * @param groupNr Number of Group
   * @returns true if all questions of group are answered
   */
  isGroupCompleted(groupNr: number): boolean {
    if (!this.questionSourceService.QuestionGroups[groupNr]) {
      throw new Error("Unknown group given");
    }
    return this.questionSourceService.QuestionGroups[groupNr].Questions.length === this.resultGroup[groupNr]?.Results.length && // counts of questions and results are equal
      this.resultGroup[groupNr]?.Results.find(result => !result.ResultetAnswer) === undefined; // every result has an answer
  }

  /**
   * Check if all questions of all groups are answered
   * @returns true if all questions of all groups are answered
   */
  areAllGroupsCompleted(): boolean {
    for (let i = 0; i < this.questionSourceService.QuestionGroups.length; i++) {
      if (!this.isGroupCompleted(i)) {
        return false;
      }
    }
    return true;
  }

}
