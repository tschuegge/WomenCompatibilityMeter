import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Answer } from './model/answer';
import { AnswerRatingEnum } from './model/answer-rating-enum';
import { EvaluationTypeEnum } from './model/evaluation-type-enum';
import { Question } from './model/question';
import { QuestionTypeEnum } from './model/question-type-enum';
import { Result } from './model/result';
import { ResultGroup } from './model/result-group';
import { TotalRating } from './model/total-rating';
import { QuestionSourceService } from './question-source.service';

/**
 * Store and calculate results
 */
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultGroup = new Array<ResultGroup>();
  private resultSaved$ = new Subject<void>();

  private totalRating: TotalRating = { currentPoints: 0, totalPoints: 0, currentRating: AnswerRatingEnum.Bad };

  constructor(private questionSourceService: QuestionSourceService) {
    this.updateQuestionaire();
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
   * Returns Total Rating
   */
  get TotalRating() {
    return this.totalRating;
  }

  /**
   * Sets a new questionaire
   */
  updateQuestionaire() {
    this.resultGroup = [];
    this.questionSourceService.QuestionGroups.forEach(group => {
      this.totalRating.totalPoints += group.Questions.length * AnswerRatingEnum.Good;
    });
    this.totalRating.currentPoints = 0;
    this.totalRating.currentRating = AnswerRatingEnum.Bad;

    if (environment.autoFillQuestions) {
      this.autoFillQuestions();
    }
  }

  /**
   * Stores a new result from user for a question
   *
   * @param question Question that was answered
   * @param result Result from user
   */
  saveResult(question: Question, result: number | string | Array<string>): void {
    const groupNo = this.questionSourceService.getQuestionGroupNoByQuestion(question);

    // Insert Result Group if needed
    if (!this.resultGroup[groupNo]) {
      this.resultGroup[groupNo] = {
        QuestionGroup: this.questionSourceService.QuestionGroups[groupNo],
        Results: new Array<Result>(),
        GroupRating: AnswerRatingEnum.Bad,
        CurrentGroupPoints: 0,
        TotalPoints: this.questionSourceService.QuestionGroups[groupNo].Questions.length * AnswerRatingEnum.Good
      };
    }

    // Determine Answer
    const questionNo = this.questionSourceService.getQuestionIndexInQuestionGroup(question);
    let resultedanswer: Answer | undefined;
    switch (question.EvaluationType) {
      case EvaluationTypeEnum.EqualOrLess:
        resultedanswer = question.Answers.find((answer, index) => result <= answer.Answer && (index === question.Answers.length - 1 || result > question.Answers[index + 1].Answer));
        break;
      case EvaluationTypeEnum.EqualOrMore:
        if (question.QuestionType === QuestionTypeEnum.Checkbox && Array.isArray(result)) {
          resultedanswer = question.Answers.find((answer, index) => result.length >= answer.Answer && (index === question.Answers.length - 1 || result.length < question.Answers[index + 1].Answer));
        } else {
          resultedanswer = question.Answers.find((answer, index) => result >= answer.Answer && (index === question.Answers.length - 1 || result < question.Answers[index + 1].Answer));
        }
        break;
      case EvaluationTypeEnum.Equal:
        resultedanswer = question.Answers.find(a => a.Answer === result);
        break;
    }

    if (!resultedanswer) {
      throw new Error(`Userinput matches to no answer: ${result}`);
    }

    // Set result and total group rating
    this.resultGroup[groupNo].Results[questionNo] = { Question: question, ResultedValue: result, ResultedAnswer: resultedanswer };
    this.resultGroup[groupNo].CurrentGroupPoints = this.sumPointsInGroup(groupNo);
    this.resultGroup[groupNo].GroupRating = this.determineRating(this.resultGroup[groupNo].CurrentGroupPoints);

    // Set total points and total rating
    this.totalRating.currentPoints = 0;
    this.totalRating.currentRating = AnswerRatingEnum.Good;
    this.resultGroup.forEach(resultGroup => {
      this.totalRating.currentPoints += resultGroup.CurrentGroupPoints;
      if (resultGroup.GroupRating < this.totalRating.currentRating) {
        this.totalRating.currentRating = resultGroup.GroupRating;
      }
    });

    this.resultSaved$.next();
  }

  /**
   * Check if all questions of a group are answered
   *
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
   *
   * @returns true if all questions of all groups are answered
   */
  areAllGroupsCompleted(): boolean {
    for (const groupNo of this.questionSourceService.QuestionGroups.keys()) {
      if (!this.isGroupCompleted(groupNo)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Get result for given question
   *
   * @param question Question
   * @returns Result or undefined if no answered yet
   */
  getResultForQuestion(question: Question): Result {
    const groupNo = this.questionSourceService.getQuestionGroupNoByQuestion(question);
    const questionNo = this.questionSourceService.getQuestionIndexInQuestionGroup(question);
    return this.resultGroup[groupNo]?.Results[questionNo];
  }

  /**
   * Fills all questions with results, only for demonstration and development purposes
   */
  autoFillQuestions() {
    this.questionSourceService.QuestionGroups.forEach(group => group.Questions.forEach(question => {
      if (question.QuestionType !== QuestionTypeEnum.Checkbox) {
        const randomAnswer = question.Answers[Math.floor(Math.random() * question.Answers.length)]; // Pick random answer
        this.saveResult(question, randomAnswer.Answer);
      } else {
        const randomAnswers = question.CheckboxOptions.filter(() => Math.random() < 0.5);
        this.saveResult(question, randomAnswers);
      }
    }));
  }

  /**
   * Determine rating for given points
   *
   * @param points Points for determine rating
   * @returns Rating
   */
  private determineRating(points: number): AnswerRatingEnum {
    let rating: AnswerRatingEnum;
    if (points % AnswerRatingEnum.Good === 0) {
      rating = AnswerRatingEnum.Good;
    } else if (points % AnswerRatingEnum.Medium === 0) {
      rating = AnswerRatingEnum.Medium;
    } else {
      rating = AnswerRatingEnum.Bad;
    }
    return rating;
  }

  /**
   * Sum of all points in group
   *
   * @param groupNo Group for sum all points
   * @returns Sum of all points
   */
  private sumPointsInGroup(groupNo: number): number {
    let totalPoints = 0;
    this.resultGroup[groupNo].Results.forEach(r => totalPoints += r.ResultedAnswer.Rating);
    return totalPoints;
  }
}
