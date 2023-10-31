import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map} from "rxjs";
import { Coffee } from '../model/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeHttpService {


  constructor(private http: HttpClient) { }

  findAllCoffees():Observable<Coffee[]>{
      console.log('call coffees')

    return this.http.get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
    
  }
}
