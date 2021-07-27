import { Component, Input, OnInit } from '@angular/core';
import { QuestionGroup } from 'src/app/shared/model/QuestionGroup';

@Component({
  selector: 'app-question-group-view',
  templateUrl: './question-group-view.component.html',
  styleUrls: ['./question-group-view.component.scss'],
})
export class QuestionGroupViewComponent implements OnInit {

  @Input() questionGroup: QuestionGroup;
  constructor() { }

  ngOnInit() { }

}
