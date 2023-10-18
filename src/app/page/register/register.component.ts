import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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

  registrar() {
    const{email,password}= this.usuario;
    this.authService.resgister(email, password).then(res=>{
      console.log("Regitro Exitoso: ", res);
    })

  }


}
