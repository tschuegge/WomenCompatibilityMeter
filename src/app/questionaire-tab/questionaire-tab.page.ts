import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonicSlides, ToastController } from '@ionic/angular';
import SwiperCore, { Pagination } from "swiper";
import { SwiperComponent } from 'swiper/angular';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { QuestionGroup } from '../shared/model/question-group';
import { QuestionSourceService } from '../shared/question-source.service';
import { ResultService } from '../shared/result.service';

SwiperCore.use([Pagination, IonicSlides]);

/**
 * Parent page for tab 'Fragebogen', it holds the control buttons an the question view
 */
@Component({
  selector: 'app-questionaire-tab',
  templateUrl: './questionaire-tab.page.html',
  styleUrls: ['./questionaire-tab.page.scss'],
  animations: [
    trigger(
      'ControlButtonSize',
      [
        state('hidden', style({ width: 0, opacity: 0 })),
        state('visible-100', style({ width: '95%', opacity: 1 })),
        state('visible-25', style({ width: '25%', opacity: 1 })),
        state('visible-50', style({ width: '45%', opacity: 1 })),
        state('visible-75', style({ width: '70%', opacity: 1 })),
        transition(':enter', animate(0)),
        transition('hidden => *', animate('0.6s ease-in-out')),
        transition('visible-25 => *', animate('0.6s ease-in-out')),
        transition('visible-50 => *', animate('0.6s ease-in-out')),
        transition('visible-75 => *', animate('0.6s ease-in-out')),
        transition('visible-100 => *', animate('0.6s ease-in-out')),
      ]
    )
  ]
})
export class QuestionaireTabPage implements OnInit, OnDestroy, AfterViewInit {

  /**
   * Instance of slide control
   */
  @ViewChild(SwiperComponent) slider: SwiperComponent;

  /**
   * Questionaire for use in template
   */
  questionGroups: Array<QuestionGroup>;

  /**
   * Animation state for back button
   */
  animationStateBackButton = "";

  /**
   * Animation state for next button
   */
  animationStateNextButton = "";

  /**
   * Animation state for result button
   */
  animationStateResultButton = "";

  private unsubscribe$ = new Subject<void>();

  constructor(
    private questionSourceService: QuestionSourceService,
    private resultService: ResultService,
    private toastController: ToastController
  ) {
    this.questionGroups = this.questionSourceService.QuestionGroups;
  }

  /**
   * Subscribe observables for changes in result groups (answering a question)
   */
  ngOnInit(): void {
    this.resultService.ResultSavedObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => this.setControlButtonsAnimationState());
  }

  /**
   * Save unsubscribe obervables for preventing memory leaks
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Set view state after view initialisation
   */
  ngAfterViewInit(): void {
    this.setControlButtonsAnimationState();
  }

  /**
   * Set animation state for control buttons
   */
  async setControlButtonsAnimationState(): Promise<void> {
    if (!!this.slider) {
      if (await this.slider.swiperRef.isBeginning) {
        this.animationStateBackButton = "hidden";
        this.animationStateNextButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-100";
        this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-75" : "hidden";
      } else if (await this.slider.swiperRef.isEnd) {
        this.animationStateBackButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-100";
        this.animationStateNextButton = "hidden";
        this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-75" : "hidden";
      } else {
        this.animationStateBackButton = "visible-25";
        this.animationStateNextButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-75";
        this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-50" : "hidden";
      }
    }
  }

  /**
   * Go to next slide
   */
  async gotoNextSlide(): Promise<void> {
    const currentGroup = this.slider.swiperRef.activeIndex;
    if (this.resultService.isGroupCompleted(currentGroup)) {
      this.slider.swiperRef.slideNext();
    } else {
      const toast = await this.toastController.create({
        message: "Es wurden nicht alle Fragen beantwortet...",
        color: 'danger',
        duration: 2000,
        translucent: false
      });
      toast.present();
    }
  }

  /**
   * Go to previous slide
   */
  gotoPrevSlide(): void {
    this.slider.swiperRef.slidePrev();
  }

}
