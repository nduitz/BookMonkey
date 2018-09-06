import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError} from 'rxjs/operators';

import { Book, Thumbnail } from './book';
import { BookFactory } from './book-factory';
import { BookRaw } from './book-raw';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: Headers = new Headers();

  books: Book[];

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
   }

   private errorHandler(error: Error | any): Observable<any> {
     return Observable.throw(error);
   }

   getAll(): Observable<Array<Book>> {
      return this.http
        .get<BookRaw[]>(`${this.api}/books`)
        .pipe(
          retry(3),
          map(rawBooks => rawBooks
            .map(rawBook => BookFactory.fromObject(rawBook)),
          ),
          catchError(this.errorHandler)
        );
   }

   getSingle(isbn): Observable<Book> {
    return this.http.get<any[]>(`${this.api}/books/${isbn}`).pipe(
                retry(3),
                map(rawBooks => BookFactory.fromObject(rawBooks)),
              catchError(this.errorHandler));
 }
}
