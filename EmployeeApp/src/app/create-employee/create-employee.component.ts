import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee:any ={}

  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
  }

  registerEmployee(){
    console.log(this.employee);
      this.employeeService.createEmployee(this.employee)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['showEmployees']);
        },
        error => console.log(error)
      )
  }

}
