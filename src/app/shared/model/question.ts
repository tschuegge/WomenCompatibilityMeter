import { QuestionTypeEnum } from "./question-type-enum";
import { Answer } from "./answer";
import { EvaluationTypeEnum } from "./evaluation-type-enum";

export interface Question {
  Text: string;
  QuestionType: QuestionTypeEnum;
  CheckboxOptions?: Array<string>;
  Answers: Array<Answer>;
  EvaluationType: EvaluationTypeEnum;
}