import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  colors:Color[] = [];
  dataLoaded:boolean = false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      setTimeout(() => {
        this.dataLoaded = true;
      }, 2000);
    }, (error) => {
      setTimeout(() => {
        this.dataLoaded = true;
      }, 2000);
    });
  }

}
