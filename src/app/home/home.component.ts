import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public Data: Array<any> = [];

  constructor(private apiService:ApiService) { 
    this.apiService.getData().subscribe((resp:any) => {
      console.log(resp)
      this.Data = resp;
    })
  }

  ngOnInit(): void {
    
  } 

}
