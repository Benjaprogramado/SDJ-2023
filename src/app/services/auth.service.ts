import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async resgister(email: string, password: string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password)
    }
    catch(err){
      console.log("Error en login: ", err)
      return null
    }
  }

  async login(email: string, password: string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password)
    }
    catch(err){
      console.log("Error en login: ", err)
      return null
    }
  }

  async loginWithGoogle(email: string, password: string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(err){
      console.log("Error en login con Google: ", err)
      return null
    }
  }

  getLoggedUser(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }





}