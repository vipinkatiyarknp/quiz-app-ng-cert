import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizAnswersComponent } from './components/quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    QuizResultComponent,
    PageNotFoundComponent,
    QuizComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
