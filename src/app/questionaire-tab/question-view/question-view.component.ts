import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/model/question';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { ResultService } from 'src/app/shared/result.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent implements OnInit {

  @Input() question: Question;
  QUESTION_TYPE_ENUM = QuestionTypeEnum;

  value: number | string | Array<string>;

  checkedCheckboxes = new Array<boolean>();

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.value = this.resultService.getResultForQuestion(this.question)?.ResultetValue;

    if (this.question.QuestionType === QuestionTypeEnum.Checkbox && Array.isArray(this.value)) {
      for (let i = 0; i < this.question.CheckboxOptions.length; i++) {
        this.checkedCheckboxes[i] = this.value.find(arrElem => arrElem === this.question.CheckboxOptions[i]) !== undefined;
      }
    }
  }

  onValueChange(): void {
    if (this.question.QuestionType === QuestionTypeEnum.Checkbox && Array.isArray(this.value)) {
      this.value = new Array<string>();
      for (let i = 0; i < this.question.CheckboxOptions.length; i++) {
        if (this.checkedCheckboxes[i]) {
          this.value.push(this.question.CheckboxOptions[i]);
        }
      }
    }

    this.resultService.saveResult(this.question, this.value);
  }

}
