import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario = {
    email: '',
    password: ''
  }

  constructor(public ruteo:Router, private authService: AuthService) { 

  }


  ngOnInit(): void {
  }
  redirigir() {
    // this.ruteo.navigateByUrl('juego/tateti')
    this.ruteo.navigateByUrl('home')
  }
  ingresar() {
    const{email,password}= this.usuario;
    this.authService.login(email, password).then(res=>{
      console.log("Regitro Exitoso: ", res);
    })

  }

  ingresarConGoogle() {
    const{email,password}= this.usuario;
    this.authService.loginWithGoogle(email, password).then(res=>{
      console.log("Regitro Exitoso: ", res);
    })

  }

  currentUser(){
    this.authService.getLoggedUser().subscribe(res=>{
      console.log(res?.email);
    });
  }

  logOut(){
    this.authService.logout();
  }



}
