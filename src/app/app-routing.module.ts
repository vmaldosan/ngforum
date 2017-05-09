import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list.component';
import { PostFormComponent } from './post/post-form.component';
import { UserListComponent } from './user/user-list.component';
import { UserFormComponent } from './user/user-form.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './login/logged-in.guard';

const routes: Routes = [
	{ path: 'posts', 		component: PostListComponent },
	{ path: 'post', 		component: PostFormComponent, canActivate: [LoggedInGuard] },
	{ path: 'users', 		component: UserListComponent, canActivate: [LoggedInGuard] },
	{ path: 'user', 		component: UserFormComponent, canActivate: [LoggedInGuard] },
	{ path: 'user/:id', component: UserFormComponent, canActivate: [LoggedInGuard] },
	{ path: 'login', 		component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
