import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private httpClient: HttpClient) {}

  getData(){
    return this.httpClient.get('assets/data/car.json')
  }
}
