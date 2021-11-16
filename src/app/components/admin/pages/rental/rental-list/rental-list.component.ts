import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals:Rental[] = [];
  dataLoaded:boolean = false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(): void {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
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
