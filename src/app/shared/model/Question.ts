import { QuestionTypeEnum } from "./QuestionTypeEnum";
import { Result } from "./Result";
import { ResultTypeEnum } from "./ResultTypeEnum";

export interface Question {
  Text: string;
  QuestionType: QuestionTypeEnum;
  Results: Array<Result>;
  ResultType: ResultTypeEnum;
  ResultedValue?: number | string | boolean;
}