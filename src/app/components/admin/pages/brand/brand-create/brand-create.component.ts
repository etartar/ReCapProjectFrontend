import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {
  brandAddForm:FormGroup;
  saveButtonLoaded:boolean = false;

  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ["", Validators.required]
    });
  }

  add(): void {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.saveButtonLoaded = true;
      this.brandService.addBrand(brandModel).subscribe((response) => {
        if (response.success) this.toastrService.success(response.message, "BAŞARILI");
        else this.toastrService.error(response.message, "HATA");
        this.changeSaveButtonLoaded(false);
      }, (responseError) => {
        if (responseError.error.StatusCode === 400) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
          }
        } else {
          this.toastrService.error("Marka eklerken hata oluştu. " + responseError.error.Message, "HATA");
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
