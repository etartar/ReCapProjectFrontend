import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandCreateComponent } from 'src/app/components/admin/pages/brand/brand-create/brand-create.component';
import { BrandDeleteComponent } from 'src/app/components/admin/pages/brand/brand-delete/brand-delete.component';
import { BrandListComponent } from 'src/app/components/admin/pages/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from 'src/app/components/admin/pages/brand/brand-update/brand-update.component';
import { DashboardComponent } from 'src/app/components/admin/pages/dashboard/dashboard.component';

const routes: Routes = [
    { path: "", pathMatch: "full", component: DashboardComponent },
    { path: "brands", component: BrandListComponent },
    { path: "brands/create", component: BrandCreateComponent },
    { path: "brands/edit/:id", component: BrandUpdateComponent },
    { path: "brands/delete/:id", component: BrandDeleteComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminLayoutRoutingModule { }