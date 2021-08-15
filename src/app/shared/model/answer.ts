import { AnswerRatingEnum } from "./answer-rating-enum";

export interface Answer {
  Answer: number | string;
  Rating: AnswerRatingEnum;
  Hint: string;
}
