import { Injectable } from '@angular/core';
import { Book } from '../books/book/types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	cart: Book[] = [];

  constructor() { }

  add(book: Book){

	console.log(book);

	this.cart.push(book);
  }

  get(){
	  return this.cart;
  }

  remove(book: Book){

	this.cart = this.cart.filter(b => b != book);

  }


}
