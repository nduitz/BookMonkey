import { Injectable } from '@angular/core';

import { Book, Thumbnail } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books: Book[];

  constructor() {
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

   getAll(): Book[] {
     return this.books;
   }

   getOne(isbn: string) {
     return this.books.find(book => book.isbn === isbn);
   }
}
