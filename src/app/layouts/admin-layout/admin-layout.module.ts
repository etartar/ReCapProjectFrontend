import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout.routing';

import { DashboardComponent } from 'src/app/components/admin/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
  ]
})
export class AdminLayoutModule { }
