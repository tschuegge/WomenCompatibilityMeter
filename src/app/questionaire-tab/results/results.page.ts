import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';
import { ResultGroup } from 'src/app/shared/model/result-group';
import { QuestionSourceService } from 'src/app/shared/question-source.service';
import { ResultService } from 'src/app/shared/result.service';

/**
 * Page for showing the result overview
 */
@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  /**
   * Import of AnswerRatingEnum for using in template
   */
  AnswerRatingEnum = AnswerRatingEnum;

  constructor(
    private resultService: ResultService,
    private questionSourceService: QuestionSourceService,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  /**
   * Check on init if all questions are answered
   */
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

  /**
   * Result Group for use in template
   */
  get ResultGroup() {
    return this.resultService.ResultGroups;
  }

  /**
   * Question Group for use in template
   */
  get QuestionGroup() {
    return this.questionSourceService.QuestionGroups;
  }

  /**
   * Determine if answers in result group contains hints
   *
   * @param resultGroup Result Group
   * @returns true if result group contains hints
   */
  resultGroupContainsHint(resultGroup: ResultGroup): boolean {
    return resultGroup.Results.find(r => r.ResultedAnswer.Hint.length > 0) !== undefined;
  }

  /**
   * Total Rating for use in template
   */
  get TotalRating() {
    return this.resultService.TotalRating;
  }
}
