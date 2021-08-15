import { AnswerRatingEnum } from "./answer-rating-enum";

/**
 * Answer for question
 */
export interface Answer {

  /**
   * Answer Value
   */
  Answer: number | string;

  /**
   * Rating for this answer
   */
  Rating: AnswerRatingEnum;

  /**
   * Hint for this answer
   */
  Hint: string;
}
