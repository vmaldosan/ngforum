import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { City } from './city';

@Injectable()
export class CityService {

	constructor(private http: Http) {}

	getCities(): Observable<City[]> {
		let headers = new Headers();
		
		return this.http
			.get('/city', { headers })
			.map(res => res.json());
	}

	/*private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}*/

}
