import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaireGuard } from '../shared/questionaire.guard';

import { QuestionaireTabPage } from './questionaire-tab.page';

const routes: Routes = [
  {
    path: 'dev',
    component: QuestionaireTabPage,
    data: { questionaire: "DEVELOPER" }
  },
  {
    path: 'gen',
    component: QuestionaireTabPage,
    data: { questionaire: "GENERAL" }
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
  },
  {
    path: '',
    canActivate: [QuestionaireGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionaireTabPageRoutingModule { }
