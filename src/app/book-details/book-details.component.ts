import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  @Output() showListEvent = new EventEmitter<any>();
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }

}
