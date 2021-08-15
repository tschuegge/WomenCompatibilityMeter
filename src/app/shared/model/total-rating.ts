import { AnswerRatingEnum } from "./answer-rating-enum";

export interface TotalRating {
  currentPoints: number;
  totalPoints: number;
  currentRating: AnswerRatingEnum;
}
