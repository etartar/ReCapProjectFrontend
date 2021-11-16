import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandCreateComponent } from 'src/app/components/admin/pages/brand/brand-create/brand-create.component';
import { BrandDeleteComponent } from 'src/app/components/admin/pages/brand/brand-delete/brand-delete.component';
import { BrandListComponent } from 'src/app/components/admin/pages/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from 'src/app/components/admin/pages/brand/brand-update/brand-update.component';
import { CarCreateComponent } from 'src/app/components/admin/pages/car/car-create/car-create.component';
import { CarDeleteComponent } from 'src/app/components/admin/pages/car/car-delete/car-delete.component';
import { CarListComponent } from 'src/app/components/admin/pages/car/car-list/car-list.component';
import { CarUpdateComponent } from 'src/app/components/admin/pages/car/car-update/car-update.component';
import { ColorCreateComponent } from 'src/app/components/admin/pages/color/color-create/color-create.component';
import { ColorDeleteComponent } from 'src/app/components/admin/pages/color/color-delete/color-delete.component';
import { ColorListComponent } from 'src/app/components/admin/pages/color/color-list/color-list.component';
import { ColorUpdateComponent } from 'src/app/components/admin/pages/color/color-update/color-update.component';
import { DashboardComponent } from 'src/app/components/admin/pages/dashboard/dashboard.component';
import { RentalListComponent } from 'src/app/components/admin/pages/rental/rental-list/rental-list.component';

const routes: Routes = [
    { path: "", pathMatch: "full", component: DashboardComponent },
    { path: "brands", component: BrandListComponent },
    { path: "brands/create", component: BrandCreateComponent },
    { path: "brands/edit/:id", component: BrandUpdateComponent },
    { path: "brands/delete/:id", component: BrandDeleteComponent },
    { path: "colors", component: ColorListComponent },
    { path: "colors/create", component: ColorCreateComponent },
    { path: "colors/edit/:id", component: ColorUpdateComponent },
    { path: "colors/delete/:id", component: ColorDeleteComponent },
    { path: "cars", component: CarListComponent },
    { path: "cars/create", component: CarCreateComponent },
    { path: "cars/edit/:id", component: CarUpdateComponent },
    { path: "cars/delete/:id", component: CarDeleteComponent },
    { path: "rentals", component: RentalListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminLayoutRoutingModule { }