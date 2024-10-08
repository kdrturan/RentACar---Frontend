import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit{

  rentals:Rental[] = []
  constructor(private rentalService:RentalService){}

  ngOnInit(): void {
    this.getRentals()
  }

  getRentals(){
    this.rentalService.getRentals("getdetail").subscribe(response =>{
      this.rentals = response.data
    })
  }


}
