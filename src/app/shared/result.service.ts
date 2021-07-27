import { Injectable } from '@angular/core';
import { QuestionSourceService } from './question-source.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private questionSourceService: QuestionSourceService) { }

  isGroupCompleted(groupNr: number): boolean {
    return this.questionSourceService.QuestionGroups[groupNr]?.Questions.find(question => !question.ResultedValue) === undefined;
  }

  areAllGroupsCompleted(): boolean {
    for (let i = 0; i < this.questionSourceService.QuestionGroups.length; i++) {
      if (!this.isGroupCompleted(i)) {
        return false;
      }
    }
    return true;
  }
}
