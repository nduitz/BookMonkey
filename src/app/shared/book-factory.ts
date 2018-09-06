import { Book } from './book';
import { empty } from 'rxjs';

import { BookRaw } from './book-raw';

export class BookFactory {

    book: BookRaw;

    this.book.test = 'test';


    static empty(): Book {
        return new Book('', '', [''], new Date(), '', 0, [{url: '', title: ''}], '');
    }

    static fromObject(rawBook: BookRaw | any): Book {
        const book = new Book(
            rawBook.isbn,
            rawBook.test,
            rawBook.authors,
            typeof(rawBook.published) === 'string' ?
                new Date(rawBook.published) : rawBook.published,
            rawBook.subtitle,
            rawBook.rating,
            rawBook.thumbnails,
            rawBook.description
        );
        return book;
    }

}
