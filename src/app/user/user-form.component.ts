import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserService} from './user.service';

@Component({
	selector: 'user-form',
	templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnInit {
	countries = ['Germany', 'Ireland', 'Spain', 'UK', 'USA'];

	model = new User(null, 'vmaldosan', 'vmaldosan@gmail.com', new Date('1984-06-24'), 'Ireland', 'Victor', 'Maldonado');

	submitted = false;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		let id = this.route.snapshot.params['id'];
		if (id) {
			this.userService.getUser(+id).then(user => this.model = user);
		}
	}

	onSubmit() {
		let numUsers = this.userService.getNumUsers();
		if (this.model.id == null) {
			this.userService.addUser(
				new User(10000 + numUsers + 1,
								this.model.username,
								this.model.email,
								this.model.dob,
								this.model.firstname,
								this.model.lastname,
								this.model.country)
			);
		} else {
			this.userService.updateUser(this.model);
		}
		this.location.back();
		this.submitted = true;
	}

	newUser() {
		this.model = new User(1, '', '', null);
	}

	goback() {
		this.location.back();
	}

	// get diagnostic() { return JSON.stringify(this.model); }
}
