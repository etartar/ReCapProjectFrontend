import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup;
  brandDetail:Brand;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getBrandDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  getBrandDetail(id:number): void {
    this.brandService.getBrandById(id).subscribe((response) => {
      this.brandDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
        this.brandUpdateForm.setValue({
          "name": this.brandDetail.name
        });
      }, 2000);
    });
  }

  update(): void {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({ id: this.brandDetail.id }, this.brandUpdateForm.value);
      this.saveButtonLoaded = true;
      this.brandService.updateBrand(this.brandDetail.id, brandModel).subscribe((response) => {
        if (response.success) this.toastrService.success(response.message, "BAŞARILI");
        else this.toastrService.error(response.message, "HATA");
        this.changeSaveButtonLoaded(false);
      }, (responseError) => {
        if (responseError.error.StatusCode === 400) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
          }
        } else {
          this.toastrService.error("Marka düzenlerken hata oluştu. " + responseError.error.Message, "HATA");
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
