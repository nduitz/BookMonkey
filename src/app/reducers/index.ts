import { BookState, bookReducer } from './book.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    books: BookState;
}

export const reducers: ActionReducerMap<AppState> = {
    books: bookReducer
};
