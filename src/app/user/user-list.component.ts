import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService} from './user.service';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.css' ]
})

export class UserListComponent {
	users: User[];
	selectedUser: User;

	constructor(private router: Router,
		userService: UserService) {

		userService.getUsers().then(users => this.users = users);
	}

	onSelect(user: User): void {
		this.selectedUser = user;
	}

	gotoNewUser() {
		this.router.navigate(['/user']);
	}

	onDelete(user: User): void {
		let yes = confirm('Do you want to delete user ' + user.id + '?');
		if (yes) {
			let idx = this.users.indexOf(user);
			this.users.splice(idx, 1);
		}
	}

	onEdit(user: User): void {
		this.router.navigate(['/user', user.id]);
	}
}
