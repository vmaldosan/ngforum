import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
	getUsers(): Promise<User[]> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let authToken = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${authToken}`);

		/* return this.http
			.get('/posts', { headers })
			.map(res => res.json()); */
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
