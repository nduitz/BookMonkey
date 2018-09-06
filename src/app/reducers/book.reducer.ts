import { Book } from '../shared/book';
import { Action } from '@ngrx/store';
import * as bookActions from '../actions/books.actions';


export type BookState = Book[];

export const initialsState: BookState = [];

function getAllBooks(state: BookState, action: bookActions.GetAllBooksSuccess): BookState {
    return action.payload;
}

export function bookReducer(state: BookState = initialsState, action: Action): BookState {
    switch (action.type) {
        case bookActions.GET_ALL_BOOKS_SUCCESS:
            return getAllBooks(state, action as bookActions.GetAllBooksSuccess);
        default:
            return state;
    }
}
