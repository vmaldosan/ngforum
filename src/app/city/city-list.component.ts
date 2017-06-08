import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'city-list',
	template: `
		<div (click)="onSelect(post)" *ngFor="let post of posts" class="form-group">
			<h4>{{ post.subject }}</h4>
			<p><i>{{ post.author.username }} ({{ post.created | date:'medium' }}) {{ post.numPrints }} times read.</i></p>
			<p>{{ post.content }}</p>
		</div>
		<hr>
		<p *ngIf="posts">{{ posts.length }} posts.</p>
	`
})

export class CityListComponent {
	cities: string[];

	constructor(private router: Router) {}
	
}
