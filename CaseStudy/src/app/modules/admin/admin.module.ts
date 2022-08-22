import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, ServicesComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
