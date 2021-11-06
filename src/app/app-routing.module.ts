import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [{
      path: "",
      loadChildren: () => import('./layouts/site-layout/site-layout.module').then(m => m.SiteLayoutModule)
    }]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [{
      path: "",
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
