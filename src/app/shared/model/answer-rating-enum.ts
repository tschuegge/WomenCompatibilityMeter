/**
 * Ratings for answers, 4^0 - 4^2 (max 4 Answers per Group)
 */
export enum AnswerRatingEnum {

  /**
   * Bad
   * Value: 4^0 (max 4 Answers per Group)
   */
  Bad = 1,

  /**
   * Medium
   * Value: 4^1 (max 4 Answers per Group)
   */
  Medium = 4,

  /**
   * Good
   * Value: 4^2 (max 4 Answers per Group)
   */
  Good = 16
}
