import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionaireTabPage } from './questionaire-tab.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionaireTabPage
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionaireTabPageRoutingModule {}
