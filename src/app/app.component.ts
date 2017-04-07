import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template:
	`
		<div class="container">
			<h1>{{title}}</h1>
			<nav>
				<a routerLink="/posts" routerLinkActive="active">Forum</a>
				<a routerLink="/users" routerLinkActive="active">Users</a>
			</nav>
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'NgForum';
}
