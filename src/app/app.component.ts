import { Component } from '@angular/core';
import { Post } from './post';

@Component({
	selector: 'my-app',
	template: '<user-form></user-form>'

	/*`
		<h1>{{title}}</h1>
		<div *ngIf="selectedPost">
			<h2>Selected post: {{ selectedPost.id }}</h2>
		</div>
		<p>Forum</p>
		<div><input #subject size="48"></div>
		<div><textarea #content rows="4" cols="50"></textarea></div>
		<div><button (click)="addPost(subject.value, content.value)">Add</button></div>
		<div (click)="onSelect(post)" *ngFor="let post of posts">
			<p>{{ post.subject }}</p>
			<p>{{ post.content }}</p>
			<hr/>
		</div>
		<p>{{posts.length}} posts.</p>
	`*/
})

export class AppComponent {
	title = 'NgForum';
	posts = [
		new Post(1, 'Post 1', `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`),
		new Post(2, 'Post 2', `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`),
		new Post(3, 'Post 3', `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`)
	];
	lastId = 3;
	selectedPost: Post;

	onSelect(post: Post) {
		this.selectedPost = post;
	}

	addPost(subject: string, content: string) {
		this.lastId = this.posts.push(new Post(this.lastId + 1, subject, content));
	}
}
