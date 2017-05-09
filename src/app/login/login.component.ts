import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
	selector: 'login-form',
	templateUrl: './login.Component.html'
})
export class LoginComponent {
	model = { 'email' : '', 'password' : ''};
	
	constructor(private loginService: LoginService, private router: Router) {}

	onSubmit(email: string, password: string) {
		this.loginService.login(email, password).subscribe((result: boolean) => {
			if (result) {
				this.router.navigate(['/posts']);
			}
		});
	}
}
