import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteLayoutRoutes } from './site-layout.routing';
import { HomePageComponent } from 'src/app/components/site/pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteLayoutRoutes)
  ]
})
export class SiteLayoutModule { }
