import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    email: '',
    password: ''
  }

  constructor(public ruteo: Router, private authService: AuthService) {

  }


  ngOnInit(): void {
  }
  redirigir() {
    // this.ruteo.navigateByUrl('juego/tateti')
    this.ruteo.navigateByUrl('home')
  }

  newUser() {
    // this.ruteo.navigateByUrl('juego/tateti')
    this.ruteo.navigateByUrl('register')
  }
  ingresar() {
    try {
      const { email, password } = this.usuario;
      this.authService.login(email, password).then(res => {
        // console.log("Ingreso Exitoso: ", res);
        if (res) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Acceso correcto',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).then(() => {
        setTimeout(() => {
          this.ruteo.navigate(['/home'])
          window.location.reload()
        }, 1500)

      })

    }
    catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error de Ingreso',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error);
    }
  }



  registrar() {
    const { email, password } = this.usuario;
    this.authService.resgister(email, password).then(res => {
      console.log("Regitro Exitoso: ", res);
    })

  }


  ingresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Regitro Exitoso: ", res);
    })

  }

  currentUser() {
    this.authService.getLoggedUser().subscribe(res => {
      console.log(res?.email);
    });
  }

  logOut() {
    this.authService.logout();
  }



}
