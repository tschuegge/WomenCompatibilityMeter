import { QuestionTypeEnum } from "./question-type-enum";
import { Answer } from "./answer";
import { EvaluationTypeEnum } from "./evaluation-type-enum";

/**
 * Question
 */
export interface Question {

  /**
   * Questiontext
   */
  Text: string;

  /**
   * Kind of a question
   */
  QuestionType: QuestionTypeEnum;

  /**
   * If QuestionType is 'Checkbox' then this will be the displayed options to select
   */
  CheckboxOptions?: Array<string>;

  /**
   * Answers for this question
   */
  Answers: Array<Answer>;

  /**
   * Kind of evaluation for this answers
   */
  EvaluationType: EvaluationTypeEnum;
}
