import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/model/question';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { ResultService } from 'src/app/shared/result.service';

/**
 * Show a single question
 */
@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent implements OnInit {

  /**
   * Question that will displayed
   */
  @Input() question: Question;

  /**
   * QuestionTypeEnum for use in template
   */
  QuestionTypeEnum = QuestionTypeEnum;

  /**
   * User input value from template
   */
  value: number | string | Array<string>;

  /**
   * Checked checkboxes, only if QuestionTypeEnum is 'Checkbox'
   */
  checkedCheckboxes = new Array<boolean>();

  constructor(private resultService: ResultService) { }

  /**
   * Init value from ResultService, if question is already answered
   */
  ngOnInit(): void {
    this.value = this.resultService.getResultForQuestion(this.question)?.ResultedValue;

    if (!this.value && this.question.QuestionType === QuestionTypeEnum.Checkbox) {
      this.value = new Array<string>();
    }

    if (this.question.QuestionType === QuestionTypeEnum.Checkbox && Array.isArray(this.value)) {
      for (let i = 0; i < this.question.CheckboxOptions.length; i++) {
        this.checkedCheckboxes[i] = this.value.find(arrElem => arrElem === this.question.CheckboxOptions[i]) !== undefined;
      }
    }
  }

  /**
   * Save result on user input
   */
  onValueChange(): void {

    // Determine value if QuestionTypeEnum is 'Checkbox'
    if (this.question.QuestionType === QuestionTypeEnum.Checkbox && Array.isArray(this.value)) {
      this.value = new Array<string>();
      for (let i = 0; i < this.question.CheckboxOptions.length; i++) {
        if (this.checkedCheckboxes[i]) {
          this.value.push(this.question.CheckboxOptions[i]);
        }
      }
    }

    // Save result
    this.resultService.saveResult(this.question, this.value);
  }

}
