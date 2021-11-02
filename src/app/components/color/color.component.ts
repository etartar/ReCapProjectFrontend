import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  currentColor:Color;
  dataLoaded:boolean = false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(): void {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color:Color): void {
    this.currentColor = color;
  }

  getCurrentColor(color:Color): string {
    if (this.currentColor == color) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllColorClass(): string {
    if (!this.currentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  clearCurrentColor(): void {
    this.currentColor = { id: 0, name: "" };
  }
}
