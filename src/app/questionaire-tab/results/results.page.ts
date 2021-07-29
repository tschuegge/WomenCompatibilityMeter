import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';
import { ResultGroup } from 'src/app/shared/model/result-group';
import { QuestionSourceService } from 'src/app/shared/question-source.service';
import { ResultService } from 'src/app/shared/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  ANSWER_RATING_ENUM = AnswerRatingEnum;

  constructor(
    private resultService: ResultService,
    private questionSourceService: QuestionSourceService,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  async ngOnInit(): Promise<void> {
    if (!this.resultService.areAllGroupsCompleted()) {
      const alert = await this.alertController.create({
        header: "Das Ergebnis kann nicht angezeigt werden",
        message: "Es wurden nicht alle Fragen beantwortet. Sie werden zum Fragebogen weitergeleitet.",
        buttons: [{
          text: "Ok",
          handler: () => this.navController.navigateBack("/")
        }],
        translucent: false
      });
      alert.present();
    }
  }

  get ResultGroup() {
    return this.resultService.ResultGroups;
  }

  get QuestionGroup() {
    return this.questionSourceService.QuestionGroups;
  }

  resultGroupContainsHint(resultGroup: ResultGroup): boolean {
    return resultGroup.Results.find(r => r.ResultedAnswer.Hint.length > 0) !== undefined;
  }

  get TotalRating() {
    return this.resultService.TotalRating;
  }
}
