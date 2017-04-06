import { Component } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';
import { User } from '../user/user';

@Component({
	selector: 'post-list',
	template: `
		<div *ngIf="selectedPost">
			<h2>Selected post: {{ selectedPost.id }}</h2>
		</div>
		<div><button class="btn btn-success">New post</button></div>
		<div (click)="onSelect(post)" *ngFor="let post of posts" class="form-group">
			<h3>{{post.subject}}</h3>
			<p><i>{{post.author.username}}</i></p>
			<p>{{post.content}}</p>
		</div>
		<hr>
		<p>{{posts.length}} posts.</p>
	`
})

export class PostListComponent {
	posts: Post[];
	selectedPost: Post;
	lastId = 3;
	testUser = new User(0, 'admin', 'admin@ngforum.com', new Date('01/01/1980'));

	constructor(postService: PostService) {
		this.posts = postService.getPosts();
	}

	onSelect(post: Post) {
		this.selectedPost = post;
	}

	addPost(subject: string, content: string) {
		this.lastId = this.posts.push(new Post(this.lastId + 1, subject, content, this.testUser, new Date()));
	}
}
