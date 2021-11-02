import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css']
})
export class CarImagesComponent implements OnInit {
  carImages:CarImage[] = [];
  dataLoaded:boolean = false;

  constructor(private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getCarImages(params["id"]);
      }
    });
  }

  getCarImages(id:number): void {
    this.carImageService.getImages(id).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

}
