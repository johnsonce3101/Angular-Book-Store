import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../types/auth';
import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	isAuthenticated: boolean = false;
	isLoading:boolean = false;

	login(form: LoginForm) { 
		
		if(this.isLoading) return;

		this.isLoading = true;
		
		
		const auth = getAuth();
		signInWithEmailAndPassword(auth, form.email, form.password)
		  .then((userCredential) => {
			// Signed in 
		  //   const user = userCredential.user;
			// ...
			this.isAuthenticated = true;
			this.router.navigate(['']);
		  })
		  .catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			this.isAuthenticated = false;
		  }).finally(() => (this.isLoading = false));
		
		};
	
		passwordMatched : boolean = true;


	register(form: RegisterForm) {

		if(this.isLoading) return;
  
	  this.isLoading = true;

	if(form.password != form.confirm_password){
		this.passwordMatched = false;
		return;
	}

	const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
	this.isAuthenticated = true;
  })

  .catch((error) => {
	this.isAuthenticated = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(() => (this.isLoading = false));

	}

	logout(){
		const auth = getAuth();
		signOut(auth).then(() => {
			this.router.navigate(['login']);
			this.isAuthenticated = false;
			// Sign-out successful.
		  }).catch((error) => {
			// An error happened.
		  });
	}

  constructor(private router: Router) {}
}
