import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',component:RegistrationComponent,pathMatch:"full"
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'vaccine',component:VaccineComponent
  },
  {
   path:'aboutUs',component:AboutUsComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
