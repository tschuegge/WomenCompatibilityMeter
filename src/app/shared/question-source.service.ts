import { Injectable } from '@angular/core';
import { Questionaire } from '../../config/questionaire.type';
import { QUESTIONS_DEVELOPER } from '../../config/questions-developer.config';
import { QUESTIONS_GENERAL } from '../../config/questions-general.config';
import { Question } from './model/question';
import { QuestionGroup } from './model/question-group';

/**
 * Holds questionaire
 */
@Injectable({
  providedIn: 'root'
})
export class QuestionSourceService {

  private questionGroupSource: Array<QuestionGroup> = QUESTIONS_DEVELOPER;
  private questionaireSource: Questionaire = "DEVELOPER";

  /**
   * All Question Groups with questions
   */
  get QuestionGroups() {
    return this.questionGroupSource;
  }

  /**
   * Loaded questionaire
   */
  get Questionaire() {
    return this.questionaireSource;
  }
  set Questionaire(value: Questionaire) {
    switch (value) {
      case "DEVELOPER":
        this.questionGroupSource = QUESTIONS_DEVELOPER;
        break;
      case "GENERAL":
        this.questionGroupSource = QUESTIONS_GENERAL;
        break;
      default:
        throw new Error("Invalid questionaire requested!");
    }
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
