import { Question } from "./question";

export interface QuestionGroup {
  GroupName: string;
  Description: string;
  Questions: Array<Question>;
}