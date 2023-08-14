import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouteResolver } from './core/quiz-resolver';

const routes: Routes = [
  { path: '', redirectTo: 'create-quiz', pathMatch: 'full' },
  {
    path: 'create-quiz',
    component: CreateQuizComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
  },
  {
    path: 'quiz-result',
    component: QuizResultComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
