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
import { ColorCreateComponent } from './pages/color/color-create/color-create.component';
import { ColorDeleteComponent } from './pages/color/color-delete/color-delete.component';
import { ColorUpdateComponent } from './pages/color/color-update/color-update.component';
import { ColorListComponent } from './pages/color/color-list/color-list.component';
import { CarCreateComponent } from './pages/car/car-create/car-create.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { CarUpdateComponent } from './pages/car/car-update/car-update.component';
import { CarDeleteComponent } from './pages/car/car-delete/car-delete.component';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    BrandListComponent,
    BrandCreateComponent,
    BrandUpdateComponent,
    BrandDeleteComponent,
    ColorCreateComponent,
    ColorDeleteComponent,
    ColorUpdateComponent,
    ColorListComponent,
    CarCreateComponent,
    CarListComponent,
    CarUpdateComponent,
    CarDeleteComponent
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
