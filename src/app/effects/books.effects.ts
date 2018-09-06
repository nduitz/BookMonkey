import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import * as bookActions from '../actions/books.actions';
import { BookFactory } from '../shared/book-factory';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class BookEffects {

    constructor(private bs: BookStoreService, private actions$: Actions) {}

    @Effect()
    getAllBooks$ = this.actions$.pipe(
        ofType<bookActions.GetAllBooks>(bookActions.GET_ALL_BOOKS),
        switchMap(action => this.bs.getAll()),
        map(data => new bookActions.GetAllBooksSuccess(data)),
        catchError(error => of(new bookActions.GetAllBooksError(error)))
    );
}

