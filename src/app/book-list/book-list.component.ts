import { Component, OnInit } from '@angular/core';

import { Book, Thumbnail } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { GetAllBooks } from '../actions/books.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>, private bookStoreService: BookStoreService) {
    this.books$ = this.store.select('books');
   }

  ngOnInit() {
    this.store.dispatch(new GetAllBooks());
  }

}
