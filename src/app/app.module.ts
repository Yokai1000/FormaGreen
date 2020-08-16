import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyCErlXSiqGpSc7lf-8ySnsqF2JYhvyIy64",
    authDomain: "formagreen-80e62.firebaseapp.com",
    databaseURL: "https://formagreen-80e62.firebaseio.com",
    projectId: "formagreen-80e62",
    storageBucket: "formagreen-80e62.appspot.com",
    messagingSenderId: "1097037393854",
    appId: "1:1097037393854:web:a1532b921434823db753ef"
};
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
