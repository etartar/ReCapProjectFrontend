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
import { VatAddedPipe } from 'src/app/pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';



@NgModule({
  declarations: [
    SiteNavbarComponent,
    SiteFooterComponent,
    BrandComponent,
    CarComponent,
    CarDetailComponent,
    CarImagesComponent,
    ColorComponent,
    RentalComponent,
    VatAddedPipe,
    FilterPipePipe
  ],
  exports: [
    SiteNavbarComponent,
    SiteFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SiteComponentsModule { }
