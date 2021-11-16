import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {
  colorDetail:Color;
  dataLoaded:boolean = false;
  saveButtonLoaded:boolean = false;

  constructor(private colorService:ColorService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param["id"]) {
        this.getColorDetail(param["id"]);
      } else {
        // sayfa yönlendirmesi yap
      }
    });
  }

  getColorDetail(id:number): void {
    this.colorService.getColorById(id).subscribe((response) => {
      this.colorDetail = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
      }, 2000);
    });
  }

  delete(): void {
    this.saveButtonLoaded = true;
    this.colorService.deleteColor(this.colorDetail.id).subscribe((response) => {
      if (response.success) this.toastrService.success(response.message, "BAŞARILI");
      else this.toastrService.error(response.message, "HATA");
      this.changeSaveButtonLoaded(false);
    }, (responseError) => {
      if (responseError.error.StatusCode === 400) {
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].Message, responseError.error.ValidationErrors[i].PropertyName);
        }
      } else {
        this.toastrService.error("Renk silerken hata oluştu. " + responseError.error.Message, "HATA");
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
