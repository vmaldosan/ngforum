import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
	getPosts() { return POSTS; }

	addPost(post: Post): number {
		return POSTS.push(post);
	}
}
