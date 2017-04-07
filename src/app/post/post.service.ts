import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
	getPosts(): Promise<Post[]> {
		return Promise.resolve(POSTS);
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
