import { Component, OnInit } from '@angular/core';

import { Post } from './post/post';
import { PostService } from './post/post.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

	posts: Post[] = [];

	constructor(private postService: PostService) { }

	ngOnInit(): void {
		this.postService.getMostReadPosts(1)
			.then(posts => this.posts = posts);
	}
}
