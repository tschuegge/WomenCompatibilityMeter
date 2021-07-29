import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Answer } from './model/answer';
import { AnswerRatingEnum } from './model/answer-rating-enum';
import { AnswerTypeEnum } from './model/answer-type-enum';
import { Question } from './model/question';
import { Result } from './model/result';
import { ResultGroup } from './model/result-group';
import { TotalRating } from './model/total-rating';
import { QuestionSourceService } from './question-source.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultGroup = new Array<ResultGroup>();
  private resultSaved$ = new Subject<void>();

  private totalRating: TotalRating = { currentPoints: 0, totalPoints: 0, currentRating: AnswerRatingEnum.Bad };

  constructor(private questionSourceService: QuestionSourceService) {
    this.questionSourceService.QuestionGroups.forEach(group => {
      this.totalRating.totalPoints += group.Questions.length * AnswerRatingEnum.Good;
    });
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

  get TotalRating() {
    return this.totalRating;
  }

  /**
   * Stores a new result from user for a question
   * @param question Question that was answered
   * @param result Result from user
   */
  saveResult(question: Question, result: number | string): void {
    const groupNo = this.questionSourceService.getQuestionGroupIndexByQuestion(question);

    // Insert Result Group if needed
    if (!this.resultGroup[groupNo]) {
      this.resultGroup[groupNo] = {
        QuestionGroup: this.questionSourceService.QuestionGroups[groupNo],
        Results: new Array<Result>(),
        GroupRating: AnswerRatingEnum.Bad,
        GroupPoints: 0,
        TotalPoints: this.questionSourceService.QuestionGroups[groupNo].Questions.length * AnswerRatingEnum.Good
      };
    }

    // Determine Answer
    const questionNo = this.questionSourceService.getQuestionIndexInQuestionGroup(question);
    let resultedanswer: Answer | undefined;
    switch (question.AnswerType) {
      case AnswerTypeEnum.EqualOrLess:
        resultedanswer = question.Answers.find((answer, index) => result <= answer.Answer && (index === question.Answers.length - 1 || result > question.Answers[index + 1].Answer));
        break;
      case AnswerTypeEnum.EqualOrMore:
        resultedanswer = question.Answers.find((answer, index) => result >= answer.Answer && (index === question.Answers.length - 1 || result < question.Answers[index + 1].Answer));
        break;
      case AnswerTypeEnum.Equal:
        resultedanswer = question.Answers.find(a => a.Answer == result);
        break;
    }

    if (!resultedanswer) {
      throw new Error(`Userinput matches to no answer: ${result}`);
    }

    // Set result and total group rating
    this.resultGroup[groupNo].Results[questionNo] = { Question: question, ResultetValue: result, ResultedAnswer: resultedanswer };
    this.resultGroup[groupNo].GroupPoints = this.determinePointsInGroup(groupNo);
    this.resultGroup[groupNo].GroupRating = this.determineRating(this.resultGroup[groupNo].GroupPoints);

    // Set total points and total rating
    this.totalRating.currentPoints = 0;
    for (let groupNo of this.resultGroup.keys()) {
      this.totalRating.currentPoints += this.determinePointsInGroup(groupNo);
    }
    this.totalRating.currentRating = this.determineRating(this.totalRating.currentPoints);

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
    for (let groupNo of this.questionSourceService.QuestionGroups.keys()) {
      if (!this.isGroupCompleted(groupNo)) {
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

  /**
   * Fills all questions with results, only for demonstration and development purposes
   */
  autoFillQuestions() {
    this.saveResult(this.questionSourceService.QuestionGroups[0].Questions[0], 60);
    this.saveResult(this.questionSourceService.QuestionGroups[0].Questions[1], 80);
    this.saveResult(this.questionSourceService.QuestionGroups[1].Questions[0], "Nein");
    this.saveResult(this.questionSourceService.QuestionGroups[1].Questions[1], "Ja");
    this.saveResult(this.questionSourceService.QuestionGroups[1].Questions[2], "Ja");
  }

  private determineRating(points: number): AnswerRatingEnum {
    return (points % AnswerRatingEnum.Good === 0) ? AnswerRatingEnum.Good : (points % AnswerRatingEnum.Medium === 0) ? AnswerRatingEnum.Medium : AnswerRatingEnum.Bad;
  }

  private determinePointsInGroup(groupNo: number): number {
    let totalPoints = 0;
    this.resultGroup[groupNo].Results.forEach(r => totalPoints += r.ResultedAnswer.Rating);
    return totalPoints;
  }
}
