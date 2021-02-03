
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
//import { auth } from 'firebase';

import firebase from 'firebase/app';
import 'firebase/auth';
//import { user } from './user';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  
 

  constructor(
    public _fire : AngularFirestore,
    private fireauth : AngularFireAuth,
    private router: Router
    ) { }



  

//auth register using email and password
createUser(user: { email: string; password: any; }){
  this.fireauth.createUserWithEmailAndPassword(user.email,user.password).then( () => {
    console.log('succefully registered user')
    this.router.navigate(['/home']);
    //redirect the user here to the new page, verify the user by code
  }).catch( err => {
    console.log('error occured', err.message)
  })
}




LoginUser(user: {email: string; password: any;}){
  this.fireauth.signInWithEmailAndPassword(user.email,user.password).then( () => {
    console.log('succesfully loged In')
    this.router.navigate(['/home']);
  }).then( err => {
    console.log('Error Occured', err)
  })
}

//geting data from firestrore
getusers(){
  return this._fire.collection("users");

}



   loginWithGoogle(){
    this.fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
     res=>{
       console.log('succesful');
       this.router.navigate(['/home']);
     }
   ).catch(err => {
     console.log('error occured', err.message);
   })
  }

  logout(){ 
    this.fireauth.signOut().then ( () => {
      console.log('succesfull logout')
      this.router.navigate(['/login']);
    }).catch(err => {
      console.log('error occured', err.message)
    })
  }


  

}
