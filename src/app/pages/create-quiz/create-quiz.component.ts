import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category, ResolverCategoryList, ErrorResponse, Questions, TriviaCategory, QuizParams, Result } from 'src/app/core/quiz-types';
import { QuizService } from 'src/app/services/quiz-service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService) { }

  private subscriptions: Subscription[] = [];
  categoryList: TriviaCategory[] = [];
  levelList: Array<string> = ['easy', 'medium', 'hard'];
  questions: Array<Questions> = [];

  createQuizForm = this.fb.group({
    category: ['', [Validators.required]],
    difficulty: ['', [Validators.required]],
  });
  quizAnswersVisible: boolean = false;


  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe((data: any) => {
        console.log(data);
        this.categoryList = data?.routeResolver?.trivia_categories;


      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  submitForm() {
    const formValue = this.createQuizForm.value;
    const params: QuizParams = new QuizParams(5, formValue.category ? formValue.category : '', formValue.difficulty ? formValue.difficulty : '', 'multiple')
    this.subscriptions.push(
      this.quizService.getQuestions(params).subscribe({
        next: (data: Result) => {
          console.log('data', data);
          this.quizAnswersVisible = true;
          this.questions = data.results;
        },
        error: (err: ErrorResponse) => {
          console.log('err', err);
        },
      })
    );
  }

}
