import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

interface Book {
	name: string;
	author: string;
	image: string;
	amount: number;

}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

	constructor(private booksService: BooksService) {}

	books: Book[] = [];
	
	isShowing: boolean = true;
  
  ngOnInit(): void {
	this.books = this.booksService.getBooks()
  }

}
