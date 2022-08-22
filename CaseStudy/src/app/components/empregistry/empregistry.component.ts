import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/emp';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/emp.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-empregistry',
  templateUrl: './empregistry.component.html',
  styleUrls: ['./empregistry.component.scss']
})
export class EmpregistryComponent implements OnInit {

  submitted = false;

  empId!: number;
  empName!: string;
  empAddress!: string;
  empSalary! : number;

  constructor(private router: Router, private empSrv: EmpService, private authSrv: AuthService) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    if (this.empId == null || this.empName == null || this.empAddress == null || this.empSalary == null ) {
      return;
    }
    this.empSrv.setEmployee(new Emp(this.empId, this.empName, this.empAddress, this.empSalary));
    this.authSrv.setExitEmpDetaiRoute(true);
    this.submitted = true;

    setInterval(() => {
      this.submitted = false;
    }, 3000);

  }

  goHome() {
    this.router.navigate(['home']);
  }

}
