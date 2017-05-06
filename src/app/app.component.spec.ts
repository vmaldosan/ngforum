import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

	let comp: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AppComponent ],
			imports: [ RouterTestingModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		comp = fixture.componentInstance;

		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
	});

	it('no title in the DOM until manually call `detectChanges`', () => {
		expect(el.textContent).toEqual('');
	});

	it('should display original title', () => {
		fixture.detectChanges();
		expect(el.textContent).toContain(comp.title);
	});

	it('should display a different test title', () => {
		comp.title = 'Test Title';
		fixture.detectChanges();
		expect(el.textContent).toContain('Test Title');
	});

});
