import { Routes } from '@angular/router';
import { BrandComponent } from 'src/app/components/site/pages/brand/brand.component';
import { CarDetailComponent } from 'src/app/components/site/pages/car-detail/car-detail.component';
import { CarComponent } from 'src/app/components/site/pages/car/car.component';
import { CheckoutComponent } from 'src/app/components/site/pages/checkout/checkout.component';
import { ColorComponent } from 'src/app/components/site/pages/color/color.component';
import { HomePageComponent } from 'src/app/components/site/pages/home-page/home-page.component';
import { RentalComponent } from 'src/app/components/site/pages/rental/rental.component';

export const SiteLayoutRoutes: Routes = [
    { path: "", pathMatch: "full", component: HomePageComponent },
    { path: "brands", component: BrandComponent },
    { path: "brands/:brandId", component: BrandComponent },
    { path: "colors", component: ColorComponent },
    { path: "colors/:colorId", component: ColorComponent },
    { path: "cars", component: CarComponent },
    { path: "cars/detail/:id", component: CarDetailComponent },
    { path: "rentals", component: RentalComponent },
    { path: "checkout", component: CheckoutComponent }
];