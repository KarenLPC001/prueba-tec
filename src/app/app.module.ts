import { NgModule, Injectable } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { apiReducer } from '../app/store/reducers/api.reducer';
import { ApiEffects } from './store/effects/api.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ api: apiReducer }),
    EffectsModule.forRoot([ApiEffects]),
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-top-right',
      timeOut: 3000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root',
})
  
export class AppModule { }
