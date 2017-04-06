import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostFormComponent } from './post/post-form.component';
import { PostService } from './post/post.service';
import { UserFormComponent } from './user/user-form.component';
import { UserService } from './user/user.service';
import { Logger } from './logger.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		PostListComponent,
		PostFormComponent,
		UserFormComponent
	],
	providers: [ Logger, PostService, UserService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
