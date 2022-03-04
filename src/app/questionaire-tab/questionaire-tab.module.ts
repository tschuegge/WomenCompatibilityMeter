import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from "swiper/angular";

import { QuestionaireTabPageRoutingModule } from './questionaire-tab-routing.module';

import { QuestionaireTabPage } from './questionaire-tab.page';
import { QuestionGroupViewComponent } from './question-group-view/question-group-view.component';
import { QuestionViewComponent } from './question-view/question-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    QuestionaireTabPageRoutingModule
  ],
  declarations: [
    QuestionaireTabPage,
    QuestionGroupViewComponent,
    QuestionViewComponent
  ]
})
export class QuestionaireTabPageModule { }
