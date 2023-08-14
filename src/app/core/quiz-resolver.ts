import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
  } from '@angular/router';
  import { inject } from '@angular/core';
  import { Observable, of } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { QuizService } from '../services/quiz-service';
  export const RouteResolver: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    quizService: QuizService = inject(QuizService)
  ): Observable<{}> =>
    quizService.getCategories().pipe(
      catchError((err) => {
        return of('No data' + err);
      })
    );
  