import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:any ={};
  constructor(private employee_service : EmployeeService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.employee_service.getEmployeeByid(this.id)
    .subscribe(
      res => {
        console.log(res);
        this.employee = res;
      },
      error => console.log(error)
    )
  }

  updateEmployee(){
      this.employee_service.updateEmployee(this.id, this.employee)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['showEmployees']);
        },
        error => console.log(error)
      )
  }

}
