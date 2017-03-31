import { Component } from '@angular/core';

import { User } from './user';
import { UserService} from './user.service';

@Component({
	selector: 'user-list',
	template: `
		<div *ngFor="let user of users">
			{{user.id}} - {{user.username}}
		</div>
	`
})

export class UserListComponent {
	users: User[];

	constructor(userService: UserService) {
		this.users = userService.getUsers();
	}
}
