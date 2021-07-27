import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/model/question';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { QuestionSourceService } from 'src/app/shared/question-source.service';
import { ResultService } from 'src/app/shared/result.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent {

  @Input() question: Question;
  QUESTION_TYPE_ENUM = QuestionTypeEnum;

  value: number;

  constructor(private resultService: ResultService) { }

  onValueChange(): void {
    this.resultService.saveResult(this.question, this.value);
  }

}
