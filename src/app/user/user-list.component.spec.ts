import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { UserListComponent } from './user-list.component';
import { UserService } from './user.service';
import { User } from '../user/user';

describe('Component: User List', () => {
	let fixture: ComponentFixture<UserListComponent>;
	let spy: any;
	let routerStub: any;
	let userService: UserService;
	let testUsers: User[] = [{
		id: 1,
		username:'test',
		email: 'user@test.ie',
		dob: new Date()
	}];

	beforeEach(async(() => {
		routerStub = jasmine.createSpyObj('Router', ['navigate']);

		TestBed.configureTestingModule({
			declarations: [ UserListComponent ],
			providers: [
				UserService,
				{ provide: Router, useValue: routerStub }
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserListComponent);

		userService = fixture.debugElement.injector.get(UserService);
		spy = spyOn(userService, 'getUsers').and.returnValue(Promise.resolve(testUsers));
	});

	it('should not show users before OnInit', () => {
		expect(spy.calls.any()).toBe(false, 'getUsers not yet called');
	});

	it('should still not show users after component initialized', () => {
		fixture.detectChanges();
		expect(spy.calls.any()).toBe(true, 'getUsers called');
	});

	it('should show users after getUsers promise (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			let li = fixture.nativeElement.querySelectorAll('li');
			expect(li.length).toBe(1);

			let id = li[0].children[0].innerHTML;
			let username = li[0].children[1].innerHTML;
			let btn = li[0].children[2].innerHTML;
			expect(+id).toBe(testUsers[0].id);
			expect(username).toBe(testUsers[0].username);
			expect(btn).toEqual('X');
		});
	}));

	it('should display \"New user\" button', () => {
		let btnTxt = 'New user';
		expect(fixture.nativeElement.querySelector('button').innerText).toContain(btnTxt);
	});

	it('should tell ROUTER to navigate when \"New user\" button clicked', () => {
		fixture.componentInstance.gotoNewUser();
		expect(routerStub.navigate).toHaveBeenCalledWith(['/user']);
	});

	it('should display \"Edit\" button when a user is clicked (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			let li = fixture.nativeElement.querySelectorAll('li');
			li[0].click();
			fixture.detectChanges();

			let btnTxt = 'Edit';
			expect(fixture.nativeElement.querySelector('#edit').innerText).toContain(btnTxt);
		});
	}));

	it('should go to user form with user id as param when \"Edit\" button clicked (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			let li = fixture.nativeElement.querySelectorAll('li');
			//li[0].click();
			//fixture.detectChanges();
			fixture.componentInstance.onEdit(testUsers[0]);
			expect(routerStub.navigate).toHaveBeenCalledWith(['/user', testUsers[0].id]);
		});
	}));

	it('should not delete a user when X button pressed and confirm dialog not accepted (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			let li = fixture.nativeElement.querySelectorAll('li');
			let btn = li[0].children[2];
			
			spyOn(window, 'confirm').and.returnValue(false);
			btn.click();
			fixture.detectChanges();
			li = fixture.nativeElement.querySelectorAll('li');
			expect(li.length).toBe(1);
		});
	}));

	it('should delete a user when X button pressed and confirm dialog accepted (async)', async(() => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			fixture.detectChanges();
			let li = fixture.nativeElement.querySelectorAll('li');
			let btn = li[0].children[2];

			spyOn(window, 'confirm').and.returnValue(true);
			btn.click();
			fixture.detectChanges();
			li = fixture.nativeElement.querySelectorAll('li');
			expect(li.length).toEqual(0);
		});
	}));

});
