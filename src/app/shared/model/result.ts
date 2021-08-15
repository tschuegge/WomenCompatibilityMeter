import { Answer } from "./answer";
import { Question } from "./question";

/**
 * Result of a question
 */
export interface Result {

  /**
   * Represented question
   */
  Question: Question;

  /**
   * Determined answer
   */
  ResultedAnswer: Answer;

  /**
   * Raw input from user
   */
  ResultedValue: number | string | Array<string>;
}
