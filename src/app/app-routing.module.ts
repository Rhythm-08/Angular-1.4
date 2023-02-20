import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ImagesComponent } from './images/images.component';
import { LogoutComponent } from './logout/logout.component';
import {WrongrouteComponent} from './wrongroute/wrongroute.component';
const routes: Routes = [
  {path:'students',component:StudentsComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'images',component:ImagesComponent},
  {path:'logout',component:LogoutComponent},
  // {path:'**',component:WrongrouteComponent,pathMatch:'full'},
  {path:'',redirectTo:'/students',pathMatch:'full'},
  {path:'students/:id/:firstname',component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
