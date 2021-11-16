import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {
  brandDetail:Brand;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private brandService:BrandService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getBrandDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
  }

  getBrandDetail(id:number): void {
    this.brandService.getBrandById(id).subscribe((response) => {
      this.brandDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
      }, 2000);
    });
  }

  delete(): void {
    this.saveButtonLoaded = true;
    this.brandService.deleteBrand(this.brandDetail.id).subscribe((response) => {
      if (response.success) this.toastrService.success(response.message, "BAŞARILI");
      else this.toastrService.error(response.message, "HATA");
      this.changeSaveButtonLoaded(false);
    }, (responseError) => {
      if (responseError.error.StatusCode === 400) {
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
        }
      } else {
        this.toastrService.error("Marka silerken hata oluştu. " + responseError.error.Message, "HATA");
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
