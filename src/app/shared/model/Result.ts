import { Answer } from "./answer";
import { Question } from "./question";

export interface Result {
  Question: Question;
  ResultedAnswer: Answer;
  ResultetValue: number | string | Array<string>;
}