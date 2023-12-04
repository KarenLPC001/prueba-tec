import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   urlApi = 'http://localhost:5273/WeatherForecast';
    
  constructor(
    private http: HttpClient
  ){
    console.log('datos api')
  }

  getData(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
      return this.http.get(this.urlApi, {
        headers:header
      }); 
  }
} 
