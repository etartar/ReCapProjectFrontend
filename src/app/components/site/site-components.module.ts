import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteNavbarComponent } from './site-navbar/site-navbar.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarComponent } from './pages/car/car.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarImagesComponent } from './pages/car-images/car-images.component';
import { ColorComponent } from './pages/color/color.component';
import { RentalComponent } from './pages/rental/rental.component';



@NgModule({
  declarations: [
    SiteNavbarComponent,
    SiteFooterComponent,
    BrandComponent,
    CarComponent,
    CarDetailComponent,
    CarImagesComponent,
    ColorComponent,
    RentalComponent
  ],
  exports: [
    SiteNavbarComponent,
    SiteFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SiteComponentsModule { }
