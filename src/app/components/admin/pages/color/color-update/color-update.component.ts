import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm:FormGroup;
  colorDetail:Color;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private formBuilder:FormBuilder, private colorService:ColorService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getColorDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
    this.createColorUpdateForm();
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  getColorDetail(id:number): void {
    this.colorService.getColorById(id).subscribe((response) => {
      this.colorDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
        this.colorUpdateForm.setValue({
          "name": this.colorDetail.name
        });
      }, 2000);
    });
  }

  update(): void {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({ id: this.colorDetail.id }, this.colorUpdateForm.value);
      this.saveButtonLoaded = true;
      this.colorService.updateColor(this.colorDetail.id, colorModel).subscribe((response) => {
        if (response.success) this.toastrService.success(response.message, "BAŞARILI");
        else this.toastrService.error(response.message, "HATA");
        this.changeSaveButtonLoaded(false);
      }, (responseError) => {
        if (responseError.error.StatusCode === 400) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
          }
        } else {
          this.toastrService.error("Renk düzenlerken hata oluştu. " + responseError.error.Message, "HATA");
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
