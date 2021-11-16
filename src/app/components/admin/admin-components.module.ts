import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { RouterModule } from '@angular/router';
import { BrandListComponent } from './pages/brand/brand-list/brand-list.component';
import { BrandCreateComponent } from './pages/brand/brand-create/brand-create.component';
import { BrandUpdateComponent } from './pages/brand/brand-update/brand-update.component';
import { BrandDeleteComponent } from './pages/brand/brand-delete/brand-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    BrandListComponent,
    BrandCreateComponent,
    BrandUpdateComponent,
    BrandDeleteComponent
  ],
  exports: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ]
})
export class AdminComponentsModule { }
