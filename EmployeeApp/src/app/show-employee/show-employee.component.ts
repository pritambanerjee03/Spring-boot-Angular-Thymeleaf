import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {


  Employees:any =[];

  constructor(private employee_service : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.showEmployees();
  }

  showEmployees(){
    this.employee_service.getEmployees()
    .subscribe(
      res => {
        console.log(res);
        this.Employees = res;
      },
      error => console.log(error)
    )
  }

  deleteEmployee(id){
      this.employee_service.removeEmployeeById(id)
      .subscribe(
        res => {
          console.log(res);
          this.showEmployees();
        },
        error => console.log(error)
      )
  }

  updateEmployee(id){
    this.router.navigate(['updateEmployee', id])
  }

}
