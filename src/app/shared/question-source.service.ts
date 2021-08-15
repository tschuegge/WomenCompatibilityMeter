import { Injectable } from '@angular/core';
import { QUESTIONS_CONFIG } from 'src/config/questions.config';
import { Question } from './model/question';
import { QuestionGroup } from './model/question-group';

@Injectable({
  providedIn: 'root'
})
export class QuestionSourceService {

  private questionGroupSource: Array<QuestionGroup> = QUESTIONS_CONFIG;

  /**
   * All Question Groups with questions
   */
  get QuestionGroups() {
    return this.questionGroupSource;
  }

  /**
   * Returns index of Question Group with given question
   *
   * @param question Question of Question Group to find
   * @returns Index of Question Group with given question
   */
  getQuestionGroupNoByQuestion(question: Question): number {
    const groupIndex = this.questionGroupSource.findIndex(questionGroup => questionGroup.Questions.find(questionInGroup => questionInGroup === question) !== undefined);
    if (groupIndex === -1) {
      throw new Error("Question not found in Question Group");
    }
    return groupIndex;
  }

  /**
   * Returns index of question in question group
   *
   * @param question Question to find
   * @returns Index of question in question group
   */
  getQuestionIndexInQuestionGroup(question: Question): number {
    const groupIndex = this.getQuestionGroupNoByQuestion(question);
    return this.questionGroupSource[groupIndex].Questions.findIndex(questionInGroup => questionInGroup === question);
    // no check of 1- (not found) needed, cause getQuestionGroupIndexByQuestion fails if question is unknown
  }

}
