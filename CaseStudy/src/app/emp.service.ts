import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpService implements Resolve<Emp>{

  currentEmp!: Emp;
  empArray: Emp[] = [
    new Emp(1, 'Yogesh', 'Pune', 10000 ),
    new Emp(2, 'Rohan', 'Mumbai', 20000),
    new Emp(3, 'Kevin', 'Kansas City', 30000),
  ];

  constructor() { }

  resolveEmpID!: any;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Emp  {
    this.resolveEmpID = route.paramMap.get('id');
    return this.getEmployeeById(this.resolveEmpID);
  }

  getAllEmployees() {
    return this.empArray;
  }

  setEmployee(emp: Emp) {
    this.empArray.push(emp);
  }

  getEmployeeById(id: number): Emp {
    this.currentEmp = this.empArray.filter(x => x.empId == id)[0];
    return this.currentEmp;
  }
}
