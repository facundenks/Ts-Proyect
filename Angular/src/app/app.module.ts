import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import {FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule } from "angular2-datatable";


import { LoginComponent} from "./components/login/login.component";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    HomeComponent,
    AboutComponent,
    
    EjemploComponent,
    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    DataTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
