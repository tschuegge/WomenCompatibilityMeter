import { QuestionTypeEnum } from "./question-type-enum";
import { Answer } from "./answer";
import { AnswerTypeEnum } from "./answer-type-enum";

export interface Question {
  Text: string;
  QuestionType: QuestionTypeEnum;
  CheckboxOptions?: Array<string>;
  Answers: Array<Answer>;
  AnswerType: AnswerTypeEnum;
}