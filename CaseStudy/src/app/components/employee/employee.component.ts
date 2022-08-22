import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/emp';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmpService } from 'src/app/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  submitted = false;
  deleted = false;
  empId!: number;
  empName!: string;
  empAddress!: string;
  empSalary! : number;
  empArray!: Emp[];

  constructor(private authService: AuthService, private empService: EmpService, private router: Router) { }

  ngOnInit(): void {
    this.authService.setExitEmpDetaiRoute(false);
    this.empArray = this.empService.getAllEmployees();
  }

  addEmployee(): void {
    // if (this.empId == null || this.empName == null || this.empAddress == null || this.empSalary == null ) {
    //   return;
    // }
    this.empService.setEmployee(new Emp(this.empId, this.empName, this.empAddress, this.empSalary));
    this.authService.setExitEmpDetaiRoute(true);
    this.submitted = true;

    setInterval(() => {
      this.submitted = false;
    }, 3000);
  }

  delEmployee(): void {
    setInterval(() => {
      this.deleted = false;
    }, 3000);
  }
}
