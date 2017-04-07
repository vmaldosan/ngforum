import { Injectable } from '@angular/core';

import { USERS } from './mock-users';
import { User } from './user';

@Injectable()
export class UserService {

	getUsers(): Promise<User[]> {
		return Promise.resolve(USERS);
	}

	getNumUsers(): number {
		return USERS.length;
	}

	getUser(id: number): Promise<User> {
		return this.getUsers().then(users => users.find(user => user.id === id));
	}

	addUser(user: User): number {
		return USERS.push(user);
	}

	updateUser(user: User): void {
		let idx = USERS.indexOf(user);
		USERS[idx] = user;
	}

}
