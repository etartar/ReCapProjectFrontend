import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutRoutingModule } from './site-layout.routing';

import { HomePageComponent } from 'src/app/components/site/pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SiteLayoutRoutingModule
  ]
})
export class SiteLayoutModule { }
