import { Injectable } from '@angular/core';

import { Passenger } from './modules/passenger.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http, Response } from '@angular/http'

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
}
