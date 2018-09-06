import { Book } from '../shared/book';

    export const GET_ALL_BOOKS = '[book]get all books';
    export const GET_ALL_BOOKS_SUCCESS = '[book]get all books success';
    export const GET_ALL_BOOKS_ERROR = '[book]get all books error';


export class GetAllBooks {
    readonly type = GET_ALL_BOOKS;

    constructor() {}
}

export class GetAllBooksSuccess {
    readonly type = GET_ALL_BOOKS_SUCCESS;

    constructor(public payload: Book[]) {}
}

export class GetAllBooksError {
    readonly type = GET_ALL_BOOKS_ERROR;

    constructor(public payload: Error) {}
}
