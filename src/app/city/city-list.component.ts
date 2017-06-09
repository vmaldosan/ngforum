import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City } from './city';
import { CityService } from './city.service';

@Component({
	selector: 'city-list',
	template: `
		<div *ngFor="let city of cities" class="form-group">
			<p>{{ city.id }}</p>
			<p>{{ city.name }}</p>
		</div>
	`
})

export class CityListComponent implements OnInit {
	cities: City[];

	constructor(private router: Router,
		private cityService: CityService) {}
	
	ngOnInit(): void {
		this.cityService.getCities().then(cities => this.cities = cities);
	}
}
