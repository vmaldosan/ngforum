import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
	selector: 'post-list',
	template: `
		<div *ngIf="selectedPost">
			<h2>Selected post: {{ selectedPost.id }}</h2>
		</div>
		<div><button (click)="gotoNewPost()" class="btn btn-success">New post</button></div>
		<div (click)="onSelect(post)" *ngFor="let post of posts" class="form-group">
			<h4>{{ post.subject }}</h4>
			<p><i>{{ post.author.username }} ({{ post.created | date:'medium' }}) {{ post.numPrints }} times read.</i></p>
			<p>{{ post.content }}</p>
		</div>
		<hr>
		<p *ngIf="posts">{{ posts.length }} posts.</p>
	`
})

export class PostListComponent {
	posts: Post[];
	selectedPost: Post;

	constructor(private router: Router,
		private postService: PostService) {

		postService.getPosts().then(posts => this.posts = posts);
	}

	onSelect(post: Post) {
		this.selectedPost = post;
	}

	gotoNewPost() {
		this.router.navigate(['/post']);
	}
}
