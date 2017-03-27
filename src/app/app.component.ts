import { Component } from '@angular/core';
import { Post } from './post';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>Selected post: {{postId}}</h2>
		<p>Forum</p>
		<ul>
			<li *ngFor="let post of posts">
				{{ post.subject }}
				{{ post.content }}
			</li>
		</ul>
		<p>{{posts.length}} posts.</p>
	`
})
export class AppComponent { 
	title = 'NgForum'
	postId = '1';
	posts = [
		new Post(1, 'Post 1', 'Lorem ipsum Magna sit aliquip cillum ad Ut officia eu Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.'),
		new Post(2, 'Post 2', 'Lorem ipsum Magna sit aliquip cillum ad Ut officia eu Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.'),
		new Post(3, 'Post 3', 'Lorem ipsum Magna sit aliquip cillum ad Ut officia eu Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.')
	];
	myPost = this.posts[0];
}
