import { Answer } from "./answer";
import { Question } from "./question";

export interface Result {
  Question: Question;
  ResultedAnswer: Answer;
  ResultedValue: number | string | Array<string>;
}
