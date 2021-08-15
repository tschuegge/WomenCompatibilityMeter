import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { ResultGroup } from 'src/app/shared/model/result-group';
import { ResultService } from 'src/app/shared/result.service';

/**
 * Page for showing result details of a question group
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {

  /**
   * Result group for use in template
   */
  resultGroup: ResultGroup | undefined;

  /**
   * AnswerRatingEnum for use in template
   */
  AnswerRatingEnum = AnswerRatingEnum;

  /**
   * QuestionTypeEnum for use in template
   */
  QuestionTypeEnum = QuestionTypeEnum;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private resultService: ResultService,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  /**
   * Check if all questions are answered and subscribe GroupNo from RouteParams
   */
  ngOnInit(): void {

    // Check if all questions are answered
    if (!this.resultService.areAllGroupsCompleted()) {
      this.navController.navigateRoot("/");
    }

    // Subscribe GroupNo from RouteParams
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.resultGroup = this.resultService.ResultGroups[params['groupNo']];
      if (!this.resultGroup) {
        this.navController.navigateRoot("/");
      }
    });
  }

  /**
   * Save unsubscribe obervables for preventing memory leaks
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Render array of strings as HTML (join it this HTML line breaks)
   *
   * @param array Array to render (for compatibility also accepts string or number, but do nothing in this case)
   * @returns SafeHtml for templte
   */
  renderArrayAsHtml(array: number | string | Array<string>): SafeHtml | string | number {
    if (Array.isArray(array)) {
      return this.domSanitizer.bypassSecurityTrustHtml(array.join("<br>"));
    } else {
      return array;
    }
  }

}
