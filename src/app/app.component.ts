import { Component } from '@angular/core';

import { LoginService} from './login/login.service';

@Component({
	selector: 'my-app',
	template:
	`
		<div class="container">
			<h1>{{title}}</h1>
			<nav>
				<a routerLink="/posts" routerLinkActive="active">Forum</a>
				<a routerLink="/users" *ngIf="loginService.isLoggedIn()" routerLinkActive="active">Users</a>
				<a routerLink="/login" *ngIf="!loginService.isLoggedIn()" routerLinkActive="active">Login</a>
				<button (click)="loginService.logout()" class="btn btn-success" *ngIf="loginService.isLoggedIn()">Logout</button>
			</nav>
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'NgForum';

	constructor(private loginService: LoginService) {}

}
