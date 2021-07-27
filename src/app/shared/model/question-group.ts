import { Question } from "./question";

export interface QuestionGroup {
  GroupName: string;
  Questions: Array<Question>;
}