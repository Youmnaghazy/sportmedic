import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { RecommmendationComponent } from './recommmendation/recommmendation.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ViewdocComponent } from './viewdoc/viewdoc.component';
import { AdddocComponent } from './adddoc/adddoc.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'upload',canActivate:[AuthGuard],component:UploadComponent},    
  {path:'recommendation',canActivate:[AuthAdminGuard],component:RecommmendationComponent},
  {path:'viewdoc',canActivate:[AuthAdminGuard],component:ViewdocComponent},
  {path:'adddoc',canActivate:[AuthAdminGuard],component:AdddocComponent},
  {path:'viewuser',canActivate:[AuthAdminGuard],component:ViewusersComponent},
  {path:'excercises',canActivate:[AuthGuard],component:ExcercisesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
