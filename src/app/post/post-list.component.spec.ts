import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostListComponent } from './post-list.component';
import { PostService } from './post.service';
import { Post } from './post';
import { User } from '../user/user';

class RouterStub {
	 navigateByUrl(url: string) { return url; }
}

describe('Component: Post List', () => {
	let comp: PostListComponent;
	let fixture: ComponentFixture<PostListComponent>;
	let spy: any;
	let routerStub: any;
	let postService: PostService;
	let testPosts: Post[] = [{
		id: 1,
		subject:'test subject',
		content: 'test content',
		author: new User(1, 'test', 'test@test.ie', new Date()),
		created: new Date()
	}];

	beforeEach(async(() => {
		routerStub = jasmine.createSpyObj('Router', ['navigate']);

		TestBed.configureTestingModule({
			declarations: [ PostListComponent ],
			providers: [
				PostService,
				{ provide: Router, useValue: routerStub }
			]
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PostListComponent);
		comp = fixture.componentInstance;

		postService = fixture.debugElement.injector.get(PostService);

		spy = spyOn(postService, 'getPosts').and.returnValue(Promise.resolve(testPosts));
	});

	it('should display \"New post\" button', () => {
		let btnTxt = 'New post';
		expect(fixture.nativeElement.querySelector('button').innerText).toContain(btnTxt);
	});

	it('should not show quote before OnInit', () => {
		expect(spy.calls.any()).toBe(false, 'getPosts not yet called');
	});

	it('should still not show posts after component initialized', () => {
		fixture.detectChanges();
		expect(spy.calls.any()).toBe(true, 'getQuote called');
	});

	it('should show posts after getPosts promise (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			expect(fixture.nativeElement.querySelector('h4').textContent).toBe(testPosts[0].subject);
		});
	}));

	describe('gotoNewPost method', () => {
		it('should tell ROUTER to navigate when New post button clicked', () => {
			fixture.componentInstance.gotoNewPost();
			expect(routerStub.navigate).toHaveBeenCalledWith(['/post']);
		});
	});

});
