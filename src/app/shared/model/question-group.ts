import { Question } from "./question";

/**
 * Questions in a Question Group will display together on a page.
 */
export interface QuestionGroup {

  /**
   * Name of the group
   */
  GroupName: string;

  /**
   * Description of the group
   */
  Description: string;

  /**
   * Questions in the group
   */
  Questions: Array<Question>;
}
