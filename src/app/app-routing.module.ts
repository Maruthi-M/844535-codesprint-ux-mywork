import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import {ViewAppointmentComponent} from './view-appointment/view-appointment.component';

import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  
  {path:'Home',component: HomeComponentComponent},
  {path:'Place Appointment',component: PlaceAppointmentComponent},
  {path:'View Appointment',component: ViewAppointmentComponent},
  {path:'Contact Us',component: ContactusComponent},
 
 // {path:'Home',component: HomeComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
