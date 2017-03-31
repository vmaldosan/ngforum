import { Injectable } from '@angular/core';

import { USERS } from './mock-users';

@Injectable()
export class UserService {
	getUsers() { return USERS; }
}
