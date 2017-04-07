import { Component } from '@angular/core';

import { User } from './user';
import { UserService} from './user.service';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.css' ]
})

export class UserListComponent {
	users: User[];

	constructor(userService: UserService) {
		this.users = userService.getUsers();
	}
}
