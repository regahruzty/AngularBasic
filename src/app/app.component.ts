import { Component } from '@angular/core';
import { BP_PREFIX } from 'blocking-proxy/built/lib/blockingproxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Aplikasi Perpustakaan';

  books: Book[]=[
    ];

  book : Book = new Book();

  kirimData(data){
    console.log(this.book);
    this.books.push(this.book);
    this.book = new Book();
  }
}

export class Book{
  constructor(public name?: string, public tahunTerbit?: number){}
}