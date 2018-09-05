import { Component } from '@angular/core';

import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html'})
export class AppComponent {
  title = 'bm';

  listOn = true;
  detailsOn = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
