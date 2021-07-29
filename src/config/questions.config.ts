import { QuestionGroup } from 'src/app/shared/model/question-group';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { AnswerTypeEnum } from 'src/app/shared/model/answer-type-enum';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';

export const QUESTIONS_CONFIG: Array<QuestionGroup> = [
  {
    GroupName: 'Teilzeit',
    Description: 'Das Anbieten von Teilzeitpensen ist ein wichtiger Faktor um ein Unternehmen für Frauen attraktiv zu gestalten.',
    Questions: [
      {
        Text: 'Zu welchem Arbeitspensum in Prozent müssen Mitarbeitende mindestens angestellt sein?',
        QuestionType: QuestionTypeEnum.PercentSlider,
        Answers: [
          { Answer: 100, Rating: AnswerRatingEnum.Bad, Hint: 'Das Ermöglichen von Teilzeit hilft Frauen (insbesondere Müttern) einer Erwerbstätigkeit nachzugehen.' },
          { Answer: 80, Rating: AnswerRatingEnum.Medium, Hint: 'Tiefere Teilzeitpensen helfen Frauen (insbesondere Müttern) einer Erwerbstätigkeit nachzugehen.' },
          { Answer: 60, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        AnswerType: AnswerTypeEnum.EqualOrLess
      },
      {
        Text: 'Eine Abteilungsleiterin möchte nach dem Mutterschaftsurlaub wieder in ihre Führungsposition zurückkehren. Wie gross muss ihr Arbeitspensum in Prozent mindestens sein?',
        QuestionType: QuestionTypeEnum.PercentSlider,
        Answers: [
          { Answer: 100, Rating: AnswerRatingEnum.Bad, Hint: 'Für Mütter ist es oft nicht möglich, in den ersten Jahren der Mutterschaft, wieder Vollzeit zu arbeiten. Durch Jobsharing oder andere Anstellungformen ist es häufig möglich, Teilzeit auch bei Führungspositionen anzubieten.' },
          { Answer: 80, Rating: AnswerRatingEnum.Medium, Hint: 'Durch Jobsharing oder andere Anstellungformen ist es häufig möglich, tiefere Teilzeitpensen auch bei Führungspositionen anzubieten.' },
          { Answer: 60, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        AnswerType: AnswerTypeEnum.EqualOrLess
      }
    ]
  },
  {
    GroupName: 'Stellenausschreibung',
    Description: 'Genderneutrale Stellenausschreibungen wirken auf eine grössere Gruppe von Menschen interessant und schrecken besonders Frauen weniger ab.',
    // Source: https://www.fho.ch/fileadmin/pdf/service/fho_gender_leitfaden_stelleninserate.pdf
    Questions: [
      {
        Text: 'Verwendet die Firma in Stellenausschreibungen Phrasen wie: "Wir suchen einen dynamischen, ehrgeizigen und zielorientierten Entwicklerungleiter." oder "Als Sekretärin sind Sie die gute Seele des Teams"?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Medium, Hint: 'Geschlechter-Stereotypen und Klischees (wie z.B. "Wir suchen einen dynamischen, ehrgeizigen und zielorientierten Verkaufsleiter." oder "Als Sekretärin sind Sie die gute Seele des Teams") sind zu vermeiden.' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        AnswerType: AnswerTypeEnum.Equal
      },
      {
        Text: 'Werden attraktive Arbeits- und Anstellungsbedingungen (z.B. moderne Infrastruktur, nahe zu ÖV-Haltestelle, kooperative Zusammenarbeit mit Vorgesetzten, Lösungen zur Vereinbarkeit von Beruf und Familie, Teilzeit, Homeoffice) aufgezeigt.',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Medium, Hint: 'In Zeiten des Fachkräftemangels bewirbt sich eine Fachkraft nicht nur beim Unternehmen, sondern auch das Unternehmen bei der Fachkraft.' }
        ],
        AnswerType: AnswerTypeEnum.Equal
      },
      {
        Text: 'Werden die Aufgaben und Anforderungen in Stellenausschreibungen beschreibend formuliert, statt Pflichten und Kompetenzen aufzuzählen?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Medium, Hint: 'Beschreibende Inserate verhindern, dass Bewerbende Punkt für Punkt als erfüllt oder nicht erfüllt klassifiziert werden. Frauen tendieren dazu, sich nicht zu bewerben, wenn ein Punkt nicht erfüllt ist.' }
        ],
        AnswerType: AnswerTypeEnum.Equal
      }
    ]
  },
  {
    GroupName: 'Frauenanteil in der Softwareentwicklung',
    Description: 'Frauen sorgen in Entwicklungsabteilungen für mehr Diversität und einen vielfältigeren Blick auf das Produkt.',
    Questions: [
      {
        Text: 'Wie hoch ist der Frauenanteil in der Softwareentwicklung?',
        QuestionType: QuestionTypeEnum.PercentSlider,
        Answers: [
          { Answer: 0, Rating: AnswerRatingEnum.Bad, Hint: 'Die erste Softwareentwicklerin zu gewinnen ist eher schwierig, da Frauen tendenziell lieber in Teams arbeiten, in denen es schon Frauen gibt. Sobald Frauen in der Softwareentwicklung eingestellt sind, wird es einfacher sein weitere Softwareentwicklerinnen zu finden.' },
          { Answer: 10, Rating: AnswerRatingEnum.Medium, Hint: 'Der Anteil von Softwareentwicklerinnen ist gering. Frauen arbeiten tendenziell lieber in Teams, in denen es schon Frauen gibt. Da es bereits Softwareentwicklerinnen in der Firma gibt, ist die Erhöhung des Frauenanteils in der Softwareentwicklung eher einfach.' },
          { Answer: 30, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        AnswerType: AnswerTypeEnum.EqualOrMore
      }
    ]
  }
];