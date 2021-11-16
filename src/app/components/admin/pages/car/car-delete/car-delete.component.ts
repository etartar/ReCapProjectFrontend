import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
  carDetail:Car;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getCarDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
  }

  getCarDetail(id:number): void {
    this.carService.getCarDetailById(id).subscribe((response) => {
      this.carDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
      }, 2000);
    });
  }

  delete(): void {
    this.saveButtonLoaded = true;
    this.carService.deleteCar(this.carDetail.id).subscribe((response) => {
      if (response.success) this.toastrService.success(response.message, "BAŞARILI");
      else this.toastrService.error(response.message, "HATA");
      this.changeSaveButtonLoaded(false);
    }, (responseError) => {
      if (responseError.error.StatusCode === 400) {
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
        }
      } else {
        this.toastrService.error("Araba silerken hata oluştu. " + responseError.error.Message, "HATA");
      }
      this.changeSaveButtonLoaded(false);
    });
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
