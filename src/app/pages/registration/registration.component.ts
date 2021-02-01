import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  surname: any;
  //auth: any;

  constructor(public _data : DatabaseService) { }

  ngOnInit(): void {
  }

  
createUser(userRegForm: { value: { email: string; password: any; }; }) {
this._data.createUser(userRegForm.value);
//createUser(userRegForm: any){



}

}
