import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.bs.getSingle(isbn).subscribe(res => this.book = res);
  }

  getRating(num: number) {
    return new Array(num);
  }

}
