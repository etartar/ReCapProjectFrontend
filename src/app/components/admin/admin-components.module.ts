import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent
  ],
  exports: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminComponentsModule { }
