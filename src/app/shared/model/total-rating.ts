import { AnswerRatingEnum } from "./answer-rating-enum";

/**
 * Total points for showing the result page
 */
export interface TotalRating {

  /**
   * Current points of all questions
   */
  currentPoints: number;

  /**
   * Total possible points
   */
  totalPoints: number;

  /**
   * Current rating (lowest of all questions)
   */
  currentRating: AnswerRatingEnum;
}
