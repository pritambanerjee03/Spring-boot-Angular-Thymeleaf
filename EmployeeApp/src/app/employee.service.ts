import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private base_Url = "http://localhost:8080/api";
private showEmployee = "/showEmployees";
private addEmployee = "/saveEmployee";
private removeEmployee = "/deleteEmployee/";
private getEmployeeById = "/showEmployeeById/";
private upadteEmployeeById = "/updateEmployee/";

  constructor(private _router : Router, private http : HttpClient) { }

  getEmployees(){
    return this.http.get<any>(this.base_Url+this.showEmployee);
  }

  createEmployee(employee){
    return this.http.post<any>(this.base_Url+this.addEmployee, employee);
  }

  removeEmployeeById(id){
    return this.http.delete<any>(this.base_Url+this.removeEmployee+id);
  }

  getEmployeeByid(id){
    return this.http.get<any>(this.base_Url+this.getEmployeeById+id);
  }

  updateEmployee(id,employee){
    return this.http.put<any>(this.base_Url+this.upadteEmployeeById+id, employee);
  }

}
