import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/model/Question';
import { QuestionTypeEnum } from 'src/app/shared/model/QuestionTypeEnum';
import { QuestionSourceService } from 'src/app/shared/question-source.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent implements OnInit {

  @Input() question: Question;
  QUESTION_TYPE_ENUM = QuestionTypeEnum;

  value: number | string | boolean;

  constructor(private questionSourceService: QuestionSourceService) { }

  ngOnInit() { }

  onValueChange(): void {
    this.question.ResultedValue = this.value;
    this.questionSourceService.fireQuestionsChanged();
  }

}
