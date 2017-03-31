import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserFormComponent} from './user/user-form.component';
import { Logger} from './logger.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		UserFormComponent
	],
	providers: [ Logger ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
