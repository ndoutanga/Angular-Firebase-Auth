import { Form } from '@angular/forms';
import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _data : DatabaseService) { }

  ngOnInit(): void {
  }




LoginUser(userLogForm:  { value: { email: string; password: any; }; }) {
this._data.LoginUser(userLogForm.value)

}
}
