import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  currentBrand:Brand;
  dataLoaded:boolean = false;
  
  constructor(private brandService:BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand:Brand): void {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand:Brand): string {
    if (this.currentBrand == brand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllBrandClass(): string {
    if (!this.currentBrand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  clearCurrentBrand(): void {
    this.currentBrand = { id: 0, name: "" };
  }
}
