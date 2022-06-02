import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { QuestionSourceService } from './question-source.service';

@Injectable({ providedIn: 'root' })
export class QuestionaireGuard implements CanActivate {
  constructor(
    private questionSourceService: QuestionSourceService,
    private router: Router
  ) { }

  canActivate() {
    switch (this.questionSourceService.Questionaire) {
      case "DEVELOPER":
        this.router.navigate(["questionaire", "dev"]);
        break;
      case "GENERAL":
        this.router.navigate(["questionaire", "gen"]);
        break;
    }
    return false;
  }
}
