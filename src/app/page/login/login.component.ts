import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(public ruteo:Router) { 

  }

  ngOnInit(): void {
  }
  redirigir() {
    // this.ruteo.navigateByUrl('juego/tateti')
    this.ruteo.navigateByUrl('home')
  }

}
