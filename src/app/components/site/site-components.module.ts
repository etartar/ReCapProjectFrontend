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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    SiteNavbarComponent,
    SiteFooterComponent,
    BrandComponent,
    CarComponent,
    CarListComponent,
    CarDetailComponent,
    CarImagesComponent,
    ColorComponent,
    RentalComponent,
    CheckoutComponent,
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
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ]
})
export class SiteComponentsModule { }
