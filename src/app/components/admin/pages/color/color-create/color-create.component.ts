import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-create',
  templateUrl: './color-create.component.html',
  styleUrls: ['./color-create.component.css']
})
export class ColorCreateComponent implements OnInit {
  colorAddForm:FormGroup;
  saveButtonLoaded:boolean = false;

  constructor(private formBuilder:FormBuilder, private colorService:ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  add(): void {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.saveButtonLoaded = true;
      this.colorService.addColor(colorModel).subscribe((response) => {
        if (response.success) this.toastrService.success(response.message, "BAŞARILI");
        else this.toastrService.error(response.message, "HATA");
        this.changeSaveButtonLoaded(false);
      }, (responseError) => {
        if (responseError.error.StatusCode === 400) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
          }
        } else {
          this.toastrService.error("Renk eklerken hata oluştu. " + responseError.error.Message, "HATA");
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
