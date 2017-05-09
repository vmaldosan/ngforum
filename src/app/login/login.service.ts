import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {
	private loggedIn = false;

	//constructor(private http: Http) {
	constructor(private router: Router) {
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	login(email: string, password: string) {
		/* let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http
			.post(
				'/login',
				JSON.stringify({ email, password }),
				{ headers }
			)
			.map(res => res.json())
			.map((res) => {
				if (res.success) {
					localStorage.setItem('auth_token', res.auth_token);
					this.loggedIn = true;
				}

				return res.success;
			}); */

		this.loggedIn = true;
		return new Observable(observer => {
			setTimeout(() => {
					observer.next(true);
			}, 1000);
		});
	}

	logout() {
		localStorage.removeItem('auth_token');
		this.loggedIn = false;
		this.router.navigate(['/posts']);
	}

	isLoggedIn() {
		return this.loggedIn;
	}
}
