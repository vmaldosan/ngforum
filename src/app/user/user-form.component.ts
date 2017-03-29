import { Component } from '@angular/core';

import { User } from './user';

@Component({
	selector: 'user-form',
	templateUrl: './user-form.component.html'
})

export class UserFormComponent {
	countries = ['Germany', 'Ireland', 'Spain', 'UK', 'USA'];

	model = new User(1, 'Vic', 'vmaldosan', 'vmaldosan@gmail.com', new Date('24/06/1984'), 'Victor', 'Maldonado', 'Ireland');

	submitted = false;

	onSubmit() { this.submitted = true; }

	get diagnostic() { return JSON.stringify(this.model); }

	newUser() {
		this.model = new User(1, '', '', '', null);
	}
}
