import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: /*'<user-form></user-form>'*/
	`
		<div class="container">
			<h1>{{title}}</h1>
			<post-list></post-list>
			<router-outlet></router-outlet>
		</div>
	`
})

export class AppComponent {
	title = 'NgForum';
}
