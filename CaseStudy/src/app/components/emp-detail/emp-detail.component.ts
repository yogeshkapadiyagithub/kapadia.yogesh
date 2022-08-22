import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/emp';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { EmpService } from 'src/app/emp.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {

  empDetail!: Emp;
  submitted = false;
  empId!: number;
  empName!: string;
  empAddress!: string;
  empSalary! : number;

  constructor(private router: Router, private actRouter: ActivatedRoute, private empServcie: EmpService,
    private authService: AuthService) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.empDetail = this.empServcie.getEmployeeById(id);

    this.actRouter.data.subscribe((data: Data) => {
      this.empDetail = data['currentEmployee'];
    });
  }

  addEmployee(): void {
    if (this.empId == null || this.empName == null || this.empAddress == null || this.empSalary == null ) {
      return;
    }
    this.empServcie.setEmployee(new Emp(this.empId, this.empName, this.empAddress, this.empSalary));
    this.authService.setExitEmpDetaiRoute(true);
    this.submitted = true;

    setInterval(() => {
      this.submitted = false;
    }, 3000);

  }

}
