import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, ToastController } from '@ionic/angular';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { QuestionGroup } from '../shared/model/question-group';
import { QuestionSourceService } from '../shared/question-source.service';
import { ResultService } from '../shared/result.service';
import { ResultsModalPage } from './results-modal/results-modal.page';

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

  questionGroups: Array<QuestionGroup>;
  title: string;
  currentGroup: number;

  animationStateBackButton = "";
  animationStateNextButton = "";
  animationStateResultButton = "";

  private unsubscribe$ = new Subject<void>();

  constructor(
    private questionSourceService: QuestionSourceService,
    private resultService: ResultService,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  @ViewChild(IonSlides) slider: IonSlides;

  ngOnInit(): void {
    this.questionGroups = this.questionSourceService.QuestionGroups;

    this.resultService.ResultSavedObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => this.setCurrentControlButtons());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.setCurrentSlide();
  }

  async setCurrentSlide(): Promise<void> {
    this.currentGroup = await this.slider.getActiveIndex();
    this.title = this.questionGroups[this.currentGroup].GroupName;
    this.setCurrentControlButtons();
  }

  async setCurrentControlButtons(): Promise<void> {
    if (await this.slider.isBeginning()) {
      this.animationStateBackButton = "hidden";
      this.animationStateNextButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-100";
      this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-75" : "hidden";
    } else if (await this.slider.isEnd()) {
      this.animationStateBackButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-100";
      this.animationStateNextButton = "hidden";
      this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-75" : "hidden";
    } else {
      this.animationStateBackButton = "visible-25";
      this.animationStateNextButton = (this.resultService.areAllGroupsCompleted()) ? "visible-25" : "visible-75";
      this.animationStateResultButton = (this.resultService.areAllGroupsCompleted()) ? "visible-50" : "hidden";
    }
  }

  async gotoNextSlide(): Promise<void> {
    if (this.resultService.isGroupCompleted(this.currentGroup)) {
      this.slider.slideNext();
    } else {
      const toast = await this.toastController.create({
        message: "Es wurden nicht alle Fragen beantwortet...",
        color: "danger",
        duration: 2000,
        translucent: true
      });
      toast.present();
    }
  }

  gotoPrevSlide(): void {
    this.slider.slidePrev();
  }

  async gotoResults(): Promise<void> {
    const modal = await this.modalController.create({
      component: ResultsModalPage
    });
    modal.present();
  }

}
