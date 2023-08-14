import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Answers, Category, Quiz, Result } from '../core/quiz-types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  private answers: Array<Answers> = [];
  getCategories() {
    const categoryUrl = 'https://opentdb.com/api_category.php';
    return this.http.get<Category>(categoryUrl);
  }

  getQuestions(params: Quiz) {
    const questionsUrl = 'https://opentdb.com/api.php?';
    let queryParams = new HttpParams()
      .append('amount', params.amount)
      .append('category', params.category)
      .append('difficulty', params.difficulty)
      .append('type', params.type);
    return this.http.get<Result>(questionsUrl, { params: queryParams });
  }

  setQuizData(data: Array<Answers>) {
    console.log('setQuizData', data);
    this.answers = data;
  }

  getQuizData() {
    return this.answers;
  }
}
