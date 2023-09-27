import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyB5Zhxzm5KpE5E2T-gGgzPEHVsiyET-6B0",
  authDomain: "sdj-2023.firebaseapp.com",
  projectId: "sdj-2023",
  storageBucket: "sdj-2023.appspot.com",
  messagingSenderId: "907776309191",
  appId: "1:907776309191:web:4f9639fd232e8619850be2"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
