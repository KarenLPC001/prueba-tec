import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private urlApi = 'http://localhost:5273/WeatherForecast';

   //BehaviorSubject para emitir eventos de carga
   private loadingSubject = new BehaviorSubject<boolean>(false);

   //Observable que los componentes pueden suscribirse 
   //para conocer el estado de carga
   loading$ = this.loadingSubject.asObservable();
    
  constructor(
    private http: HttpClient){}

    getData(): Observable<any>{
      //se indica que la carga ha comenzado
      this.loadingSubject.next(true);
      const header = new HttpHeaders().set(
        'Content-Type', 'application/json'
      );
        return this.http.get(this.urlApi, { headers: header }).pipe(
          tap(
            () => {},
            error => console.error('Error fetching data:', error),
            () => this.loadingSubject.next(false)
          )
        );
    }
  // getData(){
  //   let header = new HttpHeaders()
  //     .set('Type-content', 'aplication/json')
  //     return this.http.get(this.urlApi, {
  //       headers:header
  //     }); 
  // }
} 
