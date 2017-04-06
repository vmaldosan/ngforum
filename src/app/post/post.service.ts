import { Injectable } from '@angular/core';

import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
	getPosts() { return POSTS; }
}
