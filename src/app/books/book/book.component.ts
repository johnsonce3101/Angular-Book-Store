import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from './types/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  	@Input() book: Book = {} as Book;

	  isInCart: boolean = false;

	  addToCart(){
		  this.isInCart = true;
		  this.cartService.add(this.book);
	  }

	  removeFromCart(){
		  this.isInCart = false;
		  this.cartService.remove(this.book);
	  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
	
  }

}
