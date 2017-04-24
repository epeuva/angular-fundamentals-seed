import { Injectable } from '@angular/core';

import { Passenger } from './modules/passenger.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http, Response, Headers, RequestOptions } from '@angular/http'

const PASSENGER_API: string = '/api/passengers'

//this tells Angular that we can inject things into its constructor (DI)
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http){
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => {
        return response.json();
      })
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {

    //Not needed but added just as an example of Request Options
    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })


    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => {
        return response.json();
      })
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => {
        return response.json();
      })
  }

}
