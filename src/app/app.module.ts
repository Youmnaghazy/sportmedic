import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecommmendationComponent } from './recommmendation/recommmendation.component';
import { ExcercisesComponent } from './excercises/excercises.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UploadComponent } from './upload/upload.component';
import { ViewdocComponent } from './viewdoc/viewdoc.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AdddocComponent } from './adddoc/adddoc.component';
import{MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    RecommmendationComponent,
    ExcercisesComponent,
    NotFoundComponent,
    UploadComponent,
    ViewusersComponent,
    AdddocComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
