import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

	getBooks(){

		return [
			{
				name: 'The Marathon Dont Stop',
				author: 'Rob Kenner',
				image: 'https://images-na.ssl-images-amazon.com/images/I/51sQYXPXkYS._SX329_BO1,204,203,200_.jpg',
				amount: 17.99,
			},
			{
				name: 'The Mamba Mentality: How I Play',
				author: 'Kobe Bryant',
				image: 'https://images-na.ssl-images-amazon.com/images/I/51U2Nh1UllL._SX414_BO1,204,203,200_.jpg',
				amount: 24.99
			},
			{
				name: 'Atomic Habits',
				author: 'James Clear',
				image: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
				amount: 10.95
	
			},
			{
				name: 'A Smarter Way to Learn JavaScript',
				author: 'Mark Myers',
				image: 'https://images-na.ssl-images-amazon.com/images/I/412w7SEE1aL._SX351_BO1,204,203,200_.jpg',
				amount: 7.99
	
			},
		]
	

	}

}
