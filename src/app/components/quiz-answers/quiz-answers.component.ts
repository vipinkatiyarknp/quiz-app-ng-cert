import { Component, Input, SimpleChanges, ViewChild, OnInit } from '@angular/core';
import { Answers, Questions } from '../../core/quiz-types';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../../services/quiz-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.scss']
})
export class QuizAnswersComponent implements OnInit {
  @ViewChild(QuizComponent) quiz!: QuizComponent;
  @Input() questions: Array<Questions> = [];
  answers: Array<Answers> = [];
  isQuizVisible: boolean = false;
  isSubmitBtnEnabled: boolean = false;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.isQuizVisible = true;
  }

  createAnswers(questions: Array<Questions>): Array<Answers> {
    let data: Array<Answers> = [];
    debugger
    questions.map((que: Answers) => {
      let questions = { ...que };
      questions['isCorrectAnswer'] = null;
      questions['options'] = [];
      questions['selected'] = null;
      let allAnswers = [que.correct_answer, ...que.incorrect_answers];
      allAnswers.sort(() => Math.random() - 0.5);
      allAnswers.map((data: string, index: number) => {
        questions.options?.push({
          label: data,
          value: index,
          isChecked: false,
        });
      });
      data.push(questions);
    });
    return data;
  }

  submitAnswers() {
    this.quizService.setQuizData(this.quiz.answers);
    this.router.navigate(['quiz-result']);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('questions')) {
      this.answers = this.createAnswers(this.questions);
    }
  }

  ngAfterViewInit() {
    this.quiz.quizForm.form.statusChanges.subscribe((status:any) => {
      this.isSubmitBtnEnabled = status == 'VALID' ? true : false;
    });
  }

}
