import { QuestionGroup } from 'src/app/shared/model/question-group';
import { QuestionTypeEnum } from 'src/app/shared/model/question-type-enum';
import { EvaluationTypeEnum } from 'src/app/shared/model/evaluation-type-enum';
import { AnswerRatingEnum } from 'src/app/shared/model/answer-rating-enum';

/**
 * Questionaire in german
 */
export const QUESTIONS_CONFIG: Array<QuestionGroup> = [
  {
    GroupName: 'Teilzeit',
    Description: 'Das Anbieten von Teilzeitpensen ist ein wichtiger Faktor, um ein Unternehmen für Frauen attraktiv zu gestalten.',
    Questions: [
      {
        Text: 'Zu welchem Arbeitspensum in Prozent müssen Mitarbeitende mindestens angestellt sein?',
        QuestionType: QuestionTypeEnum.PercentSlider,
        Answers: [
          { Answer: 100, Rating: AnswerRatingEnum.Bad, Hint: 'Das Ermöglichen von Teilzeit hilft Frauen (insbesondere Müttern), einer Erwerbstätigkeit nachzugehen.' },
          { Answer: 80, Rating: AnswerRatingEnum.Medium, Hint: 'Tiefere Teilzeitpensen helfen Frauen (insbesondere Müttern), einer Erwerbstätigkeit nachzugehen.' },
          { Answer: 60, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.EqualOrLess
      },
      {
        Text: 'Eine Abteilungsleiterin möchte nach dem Mutterschaftsurlaub wieder in ihre Führungsposition zurückkehren. Wie gross muss ihr Arbeitspensum in Prozent mindestens sein?',
        QuestionType: QuestionTypeEnum.PercentSlider,
        Answers: [
          { Answer: 100, Rating: AnswerRatingEnum.Bad, Hint: 'Für Mütter ist es oft nicht umsetzbar, in den ersten Jahren der Mutterschaft, in eine Vollzeitanstellung zurückzukehren. Durch Jobsharing oder andere Anstellungsformen ist es häufig möglich, Teilzeit auch bei Führungspositionen anzubieten.' },
          { Answer: 80, Rating: AnswerRatingEnum.Medium, Hint: 'Durch Jobsharing oder andere Anstellungsformen ist es häufig möglich, tiefere Teilzeitpensen auch bei Führungspositionen anzubieten.' },
          { Answer: 60, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.EqualOrLess
      }
    ]
  },
  {
    GroupName: 'Stellenausschreibung',
    Description: 'Genderneutrale Stellenausschreibungen wirken auf eine grössere Gruppe von Menschen interessant und schrecken besonders Frauen weniger ab.',
    // Source: https://www.fho.ch/fileadmin/pdf/service/fho_gender_leitfaden_stelleninserate.pdf
    Questions: [
      {
        Text: 'Verwendet die Firma in Stellenausschreibungen Phrasen wie: "Wir suchen einen dynamischen, ehrgeizigen und zielorientierten Entwicklungsleiter." oder "Als Sekretärin sind Sie die gute Seele des Teams"?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Medium, Hint: 'Geschlechterrollenstereotypen und Klischees (wie z.B. "Wir suchen einen dynamischen, ehrgeizigen und zielorientierten Entwicklungsleiter." oder "Als Sekretärin sind Sie die gute Seele des Teams") sind zu vermeiden.' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Werden attraktive Arbeits- und Anstellungsbedingungen (z.B. moderne Infrastruktur, Nähe zu ÖV-Haltestelle, kooperative Zusammenarbeit mit Vorgesetzten, Lösungen zur Vereinbarkeit von Beruf und Familie, Teilzeit, Homeoffice) aufgezeigt?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Medium, Hint: 'In Zeiten des Fachkräftemangels bewirbt sich eine Fachkraft nicht nur beim Unternehmen, sondern auch das Unternehmen bei der Fachkraft.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Werden die Aufgaben und Anforderungen in Stellenausschreibungen beschreibend formuliert, statt Pflichten und Kompetenzen aufzuzählen?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Medium, Hint: 'Beschreibende Inserate verhindern, dass sich bewerbende Personen Punkt für Punkt als erfüllt oder nicht erfüllt klassifizieren. Frauen tendieren dazu, sich nicht zu bewerben, wenn ein Punkt nicht erfüllt ist.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
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
          { Answer: 0, Rating: AnswerRatingEnum.Bad, Hint: 'Die erste Softwareentwicklerin zu gewinnen ist eher schwierig, da Frauen tendenziell lieber in Teams arbeiten, in denen es bereits Frauen gibt. Sobald Frauen in der Softwareentwicklung angestellt sind, wird es einfacher weitere Softwareentwicklerinnen zu finden.' },
          { Answer: 10, Rating: AnswerRatingEnum.Medium, Hint: 'Der Anteil von Softwareentwicklerinnen ist gering. Frauen arbeiten tendenziell lieber in Teams, in denen es bereits Frauen gibt. Da es bereits Softwareentwicklerinnen in der Firma gibt, ist die Erhöhung des Frauenanteils in der Softwareentwicklung eher einfach.' },
          { Answer: 30, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.EqualOrMore
      },
      {
        Text: 'Gibt es Teams, in denen nur eine Frau vertreten ist?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Medium, Hint: 'Frauen arbeiten tendenziell lieber in gemischten Teams.' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      }
    ]
  },
  {
    GroupName: 'Respekt am Arbeitsplatz',
    Description: 'Allgemein ist anzunehmen, dass Respekt am Arbeitsplatz eine Selbstverständlichkeit ist. Frauen werden besonders abgeschreckt und akzeptieren dies nicht mehr, falls sie in Firmen als minderwertig angesehen werden.',
    Questions: [
      {
        Text: 'Eine Softwareentwicklerin bittet den Systemadministrator um Hilfe bei einem Netzwerkproblem. Als es nach zweimaligem Erklären immer noch nicht funktioniert, meint der Systemadministrator, dass es möglicherweise an ihren "langen Haaren" liegen würde. Wie wird diese Situation in der Firma beurteilt?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Das war nur ein dummer Spruch, keine weitere Reaktion notwendig.', Rating: AnswerRatingEnum.Bad, Hint: 'Respektvoller Umgang gegenüber allen Mitarbeitenden ist zwingend notwendig. Unangebrachte Sprüche über körperliche Merkmale oder das Geschlecht schrecken besonders Frauen ab und wirken diskriminierend.' },
          { Answer: 'Der Vorgesetzte würde reagieren und den Systemadministrator darauf hinweisen, dass solche Sprüche unangebracht sind.', Rating: AnswerRatingEnum.Medium, Hint: 'Dass fehlender Respekt von Vorgesetzten nicht akzeptiert wird, ist ein erster Schritt. Das Ziel ist, dass Respekt Teil der Kultur der Firma wird und von allen Mitarbeitenden getragen und gelebt wird.' },
          { Answer: 'Das Team toleriert ein solches Verhalten nicht.', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Eine Softwareentwicklerin verdient 10% weniger als ein männlicher Kollege bei gleicher Qualifikation. Wie geht die Firma damit um?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Dies kommt in der Firma nicht vor, da ein regelmässiger Lohnvergleich durchgeführt wird.', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Auf Nachfrage der Mitarbeiterin wird der Lohn angepasst.', Rating: AnswerRatingEnum.Medium, Hint: 'Lohnungleichheiten müssen durch regelmässige Überprüfung beseitigt werden und nicht erst, wenn Mitarbeitende die Vorgesetzten darauf aufmerksam machen. Frauen äussern sich tendenziell weniger mit der Forderung für eine Lohnangleichung beim Vorgesetzten.' },
          { Answer: 'Der Lohnunterschied lässt sich aufgrund dessen erklären, dass Frauen in der Regel weniger technisch versiert sind und aus historischen Gründen Frauen weniger verdienen wie Männer.', Rating: AnswerRatingEnum.Bad, Hint: 'Um attraktiv für Frauen zu sein, ist der Grundsatz "gleicher Lohn für gleiche Arbeit" unerlässlich. Eine generell tiefere Eignung von Frauen für die Aufgaben in der Softwareentwicklung lässt sich nicht begründen.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Eine neu eingestellte Softwareentwicklerin kommuniziert sachlich und direkt. Sie ist selbstbewusst und durchsetzungsstark. Wie würden die anderen Mitarbeitenden reagieren?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Sie würde als emanzipierte Feministin wahrgenommen.', Rating: AnswerRatingEnum.Bad, Hint: 'Eigenschaften wie die sachliche und direkte Kommunikation oder Selbstbewusstsein und Durchsetzungsstärke dürfen bei Frauen nicht anders bewertet werden, wie bei Männern.' },
          { Answer: 'Sie würde nicht speziell wahrgenommen werden.', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Sie würde besonders für ihre Professionalität gelobt werden.', Rating: AnswerRatingEnum.Medium, Hint: 'Frauen mögen es häufig nicht, wenn sie nur wegen des Frauseins auf ein Podest gehoben werden.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Die Firma stellt die erste Frau in der Softwareentwicklung ein. Wie geht die Firma mit dieser Mitarbeiterin um?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Die Firma ist stolz auf die Frau und nützt die Situation, um eine Image-Kampagne zu starten, bei der auf die Diversität und besondere Frauenfreundlichkeit im Team eingegangen wird.', Rating: AnswerRatingEnum.Bad, Hint: 'Frauen mögen es häufig nicht, wenn sie auf ein Podest gehoben werden, nur weil sie Frauen sind.' },
          { Answer: 'Die Mitarbeiterin wird wie die anderen Mitarbeitenden ins Team integriert und nicht besonders behandelt.', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Die Firma gibt besonders Acht auf die Mitarbeiterin, damit sie sich wohlfühlt und nicht die Firma wieder verlässt.', Rating: AnswerRatingEnum.Medium, Hint: 'Häufig mögen es Frauen nicht, wenn ein besonderer Wirbel um sie gemacht wird. Viele möchten, dass das Geschlecht möglichst keine Rolle spielt.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      }
    ]
  },
  {
    GroupName: 'Image der Softwareentwicklung verbessern',
    Description: 'Das Image der Softwareentwicklung ist ein Grund, warum besonders Frauen den Beruf der Softwareentwicklerin nicht lernen und ausüben möchten.',
    Questions: [
      {
        Text: 'Wie wird in der Firma Software entwickelt?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'in kleinen interdisziplinären Teams mit viel Austausch unter den Mitgliedern', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'die Entwicklerinnen und Entwickler arbeiten meistens allein und ungestört mit wenig Austausch zu anderen Mitarbeitenden', Rating: AnswerRatingEnum.Medium, Hint: 'Häufig sind das Team und der Austausch untereinander eine wichtige Komponente. Das Bild vom einsamen Entwickler schreckt viele ab, diesen Beruf auszuüben.' },
          { Answer: 'die Entwicklerinnen und Entwickler sind meistens isoliert und haben wenig Kontakt zu anderen Mitarbeitenden, Pizza und Coke sind ständige Begleiter', Rating: AnswerRatingEnum.Bad, Hint: 'Solche Klischees wie "einsamer Nerd, umgeben von Pizza und Coke" schrecken viele Personen ab und verhindern, dass Menschen in die Softwareentwicklung einsteigen.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Bedeutet Softwareentwicklung in erster Linie nur Quellcode schreiben?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Medium, Hint: 'Häufig sind die Tätigkeiten in der Softwareentwicklung vielfältiger als nur Quellcode schreiben. Diese Vielfältigkeit ist häufig nicht bekannt und daher wird der Beruf nicht so wahrgenommen, wie er wirklich ist.' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Müssen Softwareentwicklerinnen und Softwareentwickler über besonders gute mathematische Fähigkeiten verfügen?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Medium, Hint: 'In vielen Fällen wird in der Softwareentwicklung keine besonders anspruchsvolle Mathematik benötigt. Trotzdem schreckt diese scheinbare Anforderung viele Personen ab, diesen Beruf zu lernen oder auszuüben.' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Müssen Softwareentwicklerinnen und Softwareentwickler über Ästhetik verfügen?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'Ja', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'Nein', Rating: AnswerRatingEnum.Medium, Hint: 'Oft geht es in der Softwareentwicklung im übertragenen Sinn um Schönheit, sei es bei Bedienoberflächen, Datenmodellen oder Softwarearchitekturen.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      }
    ]
  },
  {
    GroupName: 'Familienfreundlichkeit',
    Description: 'Die Vereinbarkeit von Beruf und Familie ist für viele Frauen eine wichtige Komponente, warum sie sich für ein Unternehmen entscheiden.',
    Questions: [
      {
        Text: 'Was für ein Arbeitszeitmodell bietet das Unternehmen den Mitarbeitenden in der Softwareentwicklung an (bei mehreren Modellen bitte das flexibelste Modell wählen)?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'flexible Arbeitszeit mit einer Blockzeit', Rating: AnswerRatingEnum.Medium, Hint: 'Flexibilität ist besonders für Mütter in der Regel ein besonders wichtiges Kriterium. Der Verzicht auf eine Blockzeit würde die Flexibilität weiter erhöhen.' },
          { Answer: 'flexible Arbeitszeit ohne Blockzeit', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'fixe Arbeitszeiten', Rating: AnswerRatingEnum.Bad, Hint: 'Flexibilität ist besonders für Mütter in der Regel ein besonders wichtiges Kriterium. Das Einführen von flexiblen Arbeitszeiten würde die Flexibilität für alle Mitarbeitenden erhöhen.' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Von wo aus dürfen die Mitarbeitenden in der Softwareentwicklung arbeiten?',
        QuestionType: QuestionTypeEnum.RadioGroup,
        Answers: [
          { Answer: 'nur im Büro', Rating: AnswerRatingEnum.Bad, Hint: 'Für Mütter und Väter ist ein flexibler Arbeitsort ein grosser Vorteil. Das Ermöglichen von Homeoffice würde die Attraktivität des Unternehmens für Bewerbenden weiter steigern.' },
          { Answer: 'primär im Büro und an wenigen definierten Tagen im Homeoffice', Rating: AnswerRatingEnum.Medium, Hint: 'Für Mütter und Väter ist ein flexibler Arbeitsort ein grosser Vorteil. Die Möglichkeit viel aus dem Homeoffice zu arbeiten, würde die Attraktivität des Unternehmens für Bewerbenden weiter steigern.' },
          { Answer: 'beliebig viel im Büro und Homeoffice (die Mitarbeitenden sind selbst verantwortlich)', Rating: AnswerRatingEnum.Good, Hint: '' },
          { Answer: 'irgendwo, sofern die Arbeitsqualität nicht leidet', Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.Equal
      },
      {
        Text: 'Was bietet das Unternehmen den Mitarbeitenden in der Softwareentwicklung  zusätzlich an, um die Vereinbarkeit von Beruf und Familie zu vereinfachen?',
        QuestionType: QuestionTypeEnum.Checkbox,
        CheckboxOptions: [
          'flexibles Anpassen des Arbeitspensums',
          'unbezahlte Abwesenheiten',
          'Mitarbeitende mit Kindern werden bei der Ferienplanung bevorzugt',
          'zusätzliche Elternzeit bei der Geburt',
          'anderes'
        ],
        Answers: [
          { Answer: 0, Rating: AnswerRatingEnum.Bad, Hint: 'Zusätzliche Massnahmen zur Vereinbarkeit von Beruf und Familie (z.B. flexibles Anpassen des Arbeitspensums, unbezahlte Abwesenheiten, Bevorzugung bei der Ferienplanung oder zusätzliche Elternzeit bei der Geburt) steigern die Attraktivität des Unternehmens bei den Bewerbenden.' },
          { Answer: 1, Rating: AnswerRatingEnum.Medium, Hint: 'Die Einführung von weiteren Massnahmen zur Vereinbarkeit von Beruf und Familie (z.B. flexibles Anpassen des Arbeitspensums, unbezahlte Abwesenheiten, Bevorzugung bei der Ferienplanung oder zusätzliche Elternzeit bei der Geburt) steigert die Attraktivität bei Bewerbenden zusätzlich.' },
          { Answer: 2, Rating: AnswerRatingEnum.Good, Hint: '' }
        ],
        EvaluationType: EvaluationTypeEnum.EqualOrMore
      }
    ]
  }
];
