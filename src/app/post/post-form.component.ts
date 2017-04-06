import { Component } from '@angular/core';

import { Post } from './post';
import { User } from '../user/user';

@Component({
	selector: 'post-form',
	templateUrl: './post-form.component.html'
})

export class PostFormComponent {
	author = new User(0, 'author', '', new Date());
	model = new Post(1, 'test', 'test', this.author, new Date());

	submitted = false;

	onSubmit() { this.submitted = true; }

	get diagnostic() { return JSON.stringify(this.model); }

	newPost() {
		this.model = new Post(1, '', '', null, null);
	}
}
