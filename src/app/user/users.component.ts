import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
	selector: 'my-users',
	providers: [UserService],
	template: `
		<h2>Users</h2>
		<user-list></user-list>
	`
})
export class UsersComponent { }
