import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostFormComponent } from './post/post-form.component';
import { PostService } from './post/post.service';
import { UserListComponent } from './user/user-list.component';
import { UserFormComponent } from './user/user-form.component';
import { UserService } from './user/user.service';
import { CityListComponent } from './city/city-list.component';
import { CityService } from './city/city.service';
import { Logger } from './logger.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
		JsonpModule
	],
	declarations: [
		AppComponent,
		PostListComponent,
		PostFormComponent,
		UserListComponent,
		UserFormComponent,
		CityListComponent,
		LoginComponent
	],
	providers: [ PostService, UserService, CityService, LoginService, LoggedInGuard, Logger ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
