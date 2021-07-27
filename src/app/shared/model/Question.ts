import { QuestionTypeEnum } from "./question-type-enum";
import { Answer } from "./answer";
import { AnswerTypeEnum } from "./answer-type-enum";

export interface Question {
  Text: string;
  QuestionType: QuestionTypeEnum;
  Answers: Array<Answer>;
  AnswerType: AnswerTypeEnum;
}