import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Answer } from './model/answer';
import { AnswerRatingEnum } from './model/answer-rating-enum';
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

  constructor(private questionSourceService: QuestionSourceService) {

    // HACK
    //this.saveResult(questionSourceService.QuestionGroups[0].Questions[0], 60);
    //this.saveResult(questionSourceService.QuestionGroups[0].Questions[1], 60);
    //this.saveResult(questionSourceService.QuestionGroups[1].Questions[0], "Ja");
    //this.saveResult(questionSourceService.QuestionGroups[1].Questions[1], "Nein");

  }

  /**
   * Returns Observable that fires every time if a new result was stored
   */
  get ResultSavedObservable() {
    return this.resultSaved$.asObservable();
  }

  /**
   * Returns all result groups
   */
  get ResultGroups() {
    return this.resultGroup;
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
        Results: new Array<Result>(),
        GroupRating: AnswerRatingEnum.Bad
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

    // Set Result and total group Rating
    this.resultGroup[groupId].Results[questionId] = { Question: question, ResultetValue: result, ResultedAnswer: resultedanswer };
    let totalPoints = 0;
    this.resultGroup[groupId].Results.forEach(r => totalPoints += r.ResultedAnswer.Rating);
    this.resultGroup[groupId].GroupRating = (totalPoints % AnswerRatingEnum.Good === 0) ? AnswerRatingEnum.Good : (totalPoints % AnswerRatingEnum.Medium === 0) ? AnswerRatingEnum.Medium : AnswerRatingEnum.Bad;
    this.resultSaved$.next();
  }

  /**
   * Check if all questions of a group are answered
   * @param groupNo Number of Group
   * @returns true if all questions of group are answered
   */
  isGroupCompleted(groupNo: number): boolean {
    if (!this.questionSourceService.QuestionGroups[groupNo]) {
      throw new Error("Unknown group given");
    }
    return this.questionSourceService.QuestionGroups[groupNo].Questions.length === this.resultGroup[groupNo]?.Results.length && // counts of questions and results are equal
      this.resultGroup[groupNo]?.Results.find(result => !result?.ResultedAnswer) === undefined; // every result has an answer
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

  /**
   * Get result for given question
   * @param question Question
   * @returns Result or undefined if no answered yet
   */
  getResultForQuestion(question: Question): Result {
    const groupNo = this.questionSourceService.getQuestionGroupIndexByQuestion(question);
    const questionNo = this.questionSourceService.getQuestionIndexInQuestionGroup(question);
    return this.resultGroup[groupNo]?.Results[questionNo];
  }

}
