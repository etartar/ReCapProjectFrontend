import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent },
  { path: "brands", component: BrandComponent },
  { path: "brands/:brandId", component: BrandComponent },
  { path: "colors", component: ColorComponent },
  { path: "colors/:colorId", component: ColorComponent },
  { path: "cars", component: CarComponent },
  { path: "customers", component: CustomerComponent },
  { path: "rentals", component: RentalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
