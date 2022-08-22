import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmpregistryComponent } from './components/empregistry/empregistry.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmpService } from './emp.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component:  EmpregistryComponent},
  // { path: 'employee', component:  EmployeeComponent
  //     ,children: [
  //       { path: ':id',  component:  EmpDetailComponent ,
  //         resolve: {
  //                currentEmployee : EmpService
  //          }
  //       }
  //     ]
  // },
  // { path: 'employee/:id',  canDeactivate:[AuthGuard], component:  EmpDetailComponent},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: 'employee', component:  EmployeeComponent
  ,children: [
    { path: ':id',  component:  EmpDetailComponent ,
      resolve: {
             currentEmployee : EmpService
       }
    }
  ]
},

  // { path: 'employee/:id',  canDeactivate:[AuthGuard], component:  EmpDetailComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule],
})
export class AppRoutingModule {}
