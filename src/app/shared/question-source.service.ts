import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionGroup } from './model/QuestionGroup';
import { QuestionTypeEnum } from './model/QuestionTypeEnum';
import { ResultTypeEnum } from './model/ResultTypeEnum';

@Injectable({
  providedIn: 'root'
})
export class QuestionSourceService {

  private questionGroupSource: Array<QuestionGroup> = [
    {
      GroupName: 'Teilzeit',
      Questions: [
        {
          Text: 'Zu welchem Arbeitspensum in Prozent müssen Mitarbeitende mindestens angestellt sein?',
          QuestionType: QuestionTypeEnum.PercentSlider,
          Results: [{ Answer: 80, Points: 1 }, { Answer: 60, Points: 3 }],
          ResultType: ResultTypeEnum.EqualOrLess
        },
        {
          Text: 'Eine Abteilungsleiterin möchte nach dem Mutterschaftsurlaub wieder in ihre Führungsposition zurückkehren. Wie gross muss ihr Arbeitspensum in Prozent mindestens sein?',
          QuestionType: QuestionTypeEnum.PercentSlider,
          Results: [{ Answer: 80, Points: 1 }, { Answer: 60, Points: 3 }],
          ResultType: ResultTypeEnum.EqualOrLess
        }
      ]
    },
    {
      GroupName: 'Frageblock 2',
      Questions: [
        {
          Text: 'Frage',
          QuestionType: QuestionTypeEnum.PercentSlider,
          Results: [{ Answer: 80, Points: 1 }, { Answer: 60, Points: 3 }],
          ResultType: ResultTypeEnum.EqualOrLess
        }
      ]
    },
    {
      GroupName: 'Frageblock 3',
      Questions: [
        {
          Text: 'Frage',
          QuestionType: QuestionTypeEnum.PercentSlider,
          Results: [{ Answer: 80, Points: 1 }, { Answer: 60, Points: 3 }],
          ResultType: ResultTypeEnum.EqualOrLess
        }
      ]
    }
  ];

  private questionsChanged$ = new BehaviorSubject<void>(null);

  get QuestionGroups() {
    return this.questionGroupSource;
  }

  get QuestionsChangedObservable() {
    return this.questionsChanged$.asObservable();
  }

  fireQuestionsChanged(): void {
    this.questionsChanged$.next();
  }

}
