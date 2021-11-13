import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CheckIsCarRentalable } from 'src/app/models/checkIsCarRentalable';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  rentDate:Date;
  returnDate:Date;
  carDetail:Car;
  dataLoaded:boolean = false;

  constructor(private carService:CarService, private rentalService:RentalService, 
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService, 
    private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getCarDetail(params["id"]);
      }
    });
  }

  getCarDetail(id:number): void {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    }, (error) => {
      console.log(error);
    });
  }

  addToCart(car:Car) {
    if (this.rentDate === undefined) {
      this.toastrService.warning("Teslim Tarihi boş bırakılamaz.");
      return;
    }
    
    if (this.returnDate === undefined) {
      this.toastrService.warning("İade Tarihi boş bırakılamaz.");
      return;
    }
    
    if (this.rentDate === this.returnDate) {
      this.toastrService.warning("Teslim Tarihi ile İade Tarihi aynı olamaz.");
      return;
    }

    let checkIsCarRentalableModel:CheckIsCarRentalable = Object.assign({}, {
      carId: car.id,
      rentDate: this.rentDate
    });

    this.rentalService.checkIsCarRental(checkIsCarRentalableModel).subscribe((response) => {
      if (response.success) {
        this.cartService.addToCart(car, this.rentDate, this.returnDate);
        this.toastrService.success("Araç seçilen tarihler arasında boştur. Ödeme adımına geçilmektedir.");
        this.router.navigateByUrl("/checkout");
      } else {
        this.toastrService.error(response.message);
      }
    }, (error) => {
      console.log(error);
      this.toastrService.error(error.error.message);
    });
  }
}
