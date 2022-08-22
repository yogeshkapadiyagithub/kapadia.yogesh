import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { EmpDetailComponent } from 'src/app/components/emp-detail/emp-detail.component';
import { EmpService } from 'src/app/emp.service';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'employeelist', component: EmployeeComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: 'employee', component:  EmployeeComponent
      ,children: [
        { path: ':id',  component:  EmpDetailComponent ,
          resolve: {
                 currentEmployee : EmpService
           }
        }
      ]
  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
