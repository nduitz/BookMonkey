import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book, Thumbnail } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  books: Book[];

  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book(
        'isbn',
        'title',
        ['johann', 'johann2', 'johann3'],
        new Date(2017, 3, 1),
        'subtitle',
        10,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Bild')],
        'description'
      ),
      new Book(
        'isben',
        'title',
        ['johann', 'johann2', 'johann3'],
        new Date(2017, 3, 1),
        'subtitle',
        10,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Bild')],
        'description'
      ),
      new Book(
        'isban',
        'title',
        ['johann', 'johann2', 'johann3'],
        new Date(2017, 3, 1),
        'subtitle',
        10,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Bild')],
        'description'
      )
    ];
  }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }

}
