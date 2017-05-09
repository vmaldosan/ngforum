import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

	// constructor(private http: Http) {}

	getPosts(): Promise<Post[]> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let authToken = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${authToken}`);

		return Promise.resolve(POSTS);
		/* return this.http
			.get('/posts', { headers })
			.map(res => res.json()); */
	}

	addPost(post: Post): number {
		return POSTS.push(post);
	}

	getNumPosts(): number {
		return POSTS.length;
	}

	getMostReadPosts(thresold: number): Promise<Post[]> {
		return Promise.resolve(POSTS.slice(1, thresold));
	}
}
