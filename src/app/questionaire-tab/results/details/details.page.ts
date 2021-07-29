import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { ResultGroup } from 'src/app/shared/model/result-group';
import { ResultService } from 'src/app/shared/result.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  resultGroup: ResultGroup;
  ANSWER_RATING_ENUM = AnswerRatingEnum;
  QUESTION_TYPE_ENUM = QuestionTypeEnum;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private resultService: ResultService,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.resultService.areAllGroupsCompleted()) {
      this.navController.navigateRoot("/");
    }
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.resultGroup = this.resultService.ResultGroups[params["groupNo"]];
      if (!this.resultGroup) {
        this.navController.navigateRoot("/");
      }
    });
  }

}
