import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  brands:Brand[] = [];
  colors:Color[] = [];
  carUpdateForm:FormGroup;
  carDetail:CarDetail;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private colorService:ColorService, 
    private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getCarDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
  }

  getBrands(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors(): void {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: [""]
    });
  }

  getCarDetail(id:number): void {
    this.carService.getCarById(id).subscribe((response) => {
      this.carDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
        this.carUpdateForm.setValue({
          "brandId": this.carDetail.brandId,
          "colorId": this.carDetail.colorId,
          "modelYear": this.carDetail.modelYear,
          "dailyPrice": this.carDetail.dailyPrice,
          "description": this.carDetail.description
        });
      }, 2000);
    });
  }

  update(): void {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.saveButtonLoaded = true;
      this.carService.updateCar(this.carDetail.id, carModel).subscribe((response) => {
        if (response.success) this.toastrService.success(response.message, "BAŞARILI");
        else this.toastrService.error(response.message, "HATA");
        this.changeSaveButtonLoaded(false);
      }, (responseError) => {
        if (responseError.error.StatusCode === 400) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
          }
        } else {
          this.toastrService.error("Araba düzenlerken hata oluştu. " + responseError.error.Message, "HATA");
        }
        this.changeSaveButtonLoaded(false);
      });
    } else {
      this.toastrService.warning("Formunuz eksik.", "DİKKAT");
      this.changeSaveButtonLoaded(false);
    }
  }

  disabledSaveButton():string {
    return (this.saveButtonLoaded) ? "disabled" : "";
  }

  changeSaveButtonLoaded(value:boolean): void {
    setTimeout(() => {
      this.saveButtonLoaded = value;
    }, 2000);
  }
}
