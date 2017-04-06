import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PostListComponent } from './post/post-list.component';
import { UserFormComponent } from './user/user-form.component';
import { Logger } from './logger.service';
import { PostService } from './post/post.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		PostListComponent,
		UserFormComponent
	],
	providers: [ Logger, PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
