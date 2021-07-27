import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questionaire-tab',
    loadChildren: () => import('./questionaire-tab/questionaire-tab.module').then(m => m.QuestionaireTabPageModule)
  },
  {
    path: 'info-tab',
    loadChildren: () => import('./info-tab/info-tab.module').then(m => m.InfoTabPageModule)
  },
  {
    path: '',
    redirectTo: 'questionaire-tab',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
