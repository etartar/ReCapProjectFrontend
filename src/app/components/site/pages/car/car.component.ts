import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  brandId:string="";
  colorId:string="";
  brands:Brand[] = [];
  colors:Color[] = [];
  cars:Car[] = [];
  brandDataLoaded:boolean = false;
  colorDataLoaded:boolean = false;
  carDataLoaded:boolean = false;

  constructor(private carService:CarService, private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getCars();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.brandDataLoaded = true;
    });
  }

  getColors(): void {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.colorDataLoaded = true;
    });
  }

  getCars(): void {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.carDataLoaded = true;
    });
  }

  filterBrands(): void {
    if (this.brandId != "") {
      this.colorId = "";
      this.carService.getCarsByBrandId(parseInt(this.brandId)).subscribe((response) => {
        this.cars = response.data;
        this.carDataLoaded = true;
      });
    } else {
      this.getCars();
    }
  }

  filterColors(): void {
    if (this.colorId != "") {
      this.brandId = "";
      this.carService.getCarsByColorId(parseInt(this.colorId)).subscribe((response) => {
        this.cars = response.data;
        this.carDataLoaded = true;
      });
    } else {
      this.getCars();
    }
  }
}
