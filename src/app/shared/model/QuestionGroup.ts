import { Question } from "./Question";

export interface QuestionGroup {
  GroupName: string;
  Questions: Array<Question>;
}