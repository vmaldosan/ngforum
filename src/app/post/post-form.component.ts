import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Post } from './post';
import { PostService } from './post.service';
import { User } from '../user/user';

@Component({
	selector: 'post-form',
	templateUrl: './post-form.component.html'
})

export class PostFormComponent {
	author = new User(0, 'author', '', new Date());
	model = new Post(1, 'test', 'asdfasdfasdf', this.author, new Date());
	lastId = 3;

	submitted = false;

	constructor(
		private postService: PostService,
		private location: Location
	) {}

	onSubmit(data: Object) {
		let post = (Post) data;
		this.lastId = this.postService.addPost(new Post(this.lastId + 1, post.subject, post.content, this.author, new Date()));
		this.location.back();
		this.submitted = true;
	}

	get diagnostic() { return JSON.stringify(this.model); }

	newPost() {
		this.model = new Post(1, '', '', null, null);
	}

	goback() {
		this.location.back();
	}

}
