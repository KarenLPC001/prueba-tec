import { Component, OnInit, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { selectApiData, selectApiLoading, selectApiError } from '../store/selectors/api.selector';
import { loadApi } from '../store/actions/api.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Data: any[] = [];
  public loading$ = this.store.select(selectApiLoading);
  public error$ = this.store.select(selectApiError);


  constructor(
    private apiService: ApiService,
    private store: Store,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.store.dispatch(loadApi({ loading: true }));

    this.store.select(selectApiData).subscribe(data => {
      this.Data = data;

      this.toastr.success('Datos cargados correctamente', 'Exito', {
        positionClass: 'toast-top-right',
      });
    });

    this.store.select(selectApiLoading).subscribe(loading => {
      console.log('Loading:', loading)

      if (loading) {
        this.toastr.info('Cargando datos...', 'Cargando', {
          positionClass: 'toast-top-right',
        });
      }
    });

    this.store.select(selectApiError).subscribe(error => {
      console.log('Error:', error)

      if (error) {
        this.toastr.error('Ocurrio un error al cargar los datos', 'Error', {
          positionClass: 'toast-top-right',
        });
      }
    });

  }

}
