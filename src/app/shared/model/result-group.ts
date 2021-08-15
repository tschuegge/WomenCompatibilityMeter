import { AnswerRatingEnum } from "./answer-rating-enum";
import { QuestionGroup } from "./question-group";
import { Result } from "./result";

/**
 * Group of results, one result group represents one question group
 */
export interface ResultGroup {

  /**
   * Represented question group
   */
  QuestionGroup: QuestionGroup;

  /**
   * Results in this group
   */
  Results: Array<Result>;

  /**
   * Current rating for this group (lowest value of all results)
   */
  GroupRating: AnswerRatingEnum;

  /**
   * Total number of possible points in this group
   */
  TotalPoints: number;

  /**
   * Current point of this group
   */
  CurrentGroupPoints: number;
}
