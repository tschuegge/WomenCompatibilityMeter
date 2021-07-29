import { AnswerRatingEnum } from "./answer-rating-enum";
import { QuestionGroup } from "./question-group";
import { Result } from "./result";

export interface ResultGroup {
  QuestionGroup: QuestionGroup;
  Results: Array<Result>;
  GroupRating: AnswerRatingEnum;
  TotalPoints: number;
  GroupPoints: number;
}