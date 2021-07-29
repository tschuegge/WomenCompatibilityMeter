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

  @Input() question!: Question;
  QUESTION_TYPE_ENUM = QuestionTypeEnum;

  value!: number | string;

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.value = this.resultService.getResultForQuestion(this.question)?.ResultetValue;
  }

  onValueChange(): void {
    this.resultService.saveResult(this.question, this.value);
  }

}
