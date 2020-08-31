import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'/showEmployee',pathMatch:'full'},
  {path:'showEmployees', component: ShowEmployeeComponent},
  {path:'addEmployee', component: CreateEmployeeComponent},
  {path:'updateEmployee/:id', component: UpdateEmployeeComponent},
  {path:'**', component: ShowEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
