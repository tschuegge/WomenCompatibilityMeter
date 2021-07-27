import { Answer } from "./answer";
import { Question } from "./question";

export interface Result {
  Question: Question;
  ResultetAnswer: Answer;
  ResultetValue: number | string;
}