import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   person : any;  

  constructor(
    public _data : DatabaseService
  ) { }

  ngOnInit(): void {




  }

}
