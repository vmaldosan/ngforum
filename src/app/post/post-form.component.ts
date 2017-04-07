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

	submitted = false;

	constructor(
		private postService: PostService,
		private location: Location
	) {}

	onSubmit() {
		let numPosts = this.postService.getPosts().length;
		let newNum = this.postService.addPost(new Post(10000 + numPosts + 1, this.model.subject, this.model.content, this.author, new Date()));
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
