import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list.component';
import { PostFormComponent } from './post/post-form.component';

const routes: Routes = [
	{ path: 'posts', component: PostListComponent },
	{ path: 'post', component: PostFormComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}