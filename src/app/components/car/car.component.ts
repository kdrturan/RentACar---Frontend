import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{

  cars: Car[] = []
  constructor(private carService:CarService
  ){}

  

  ngOnInit(): void {

    this.getCars()
  }

  getCars(){
    this.carService.getCars("getdetail").subscribe(response =>{
      this.cars = response.data
    })
  }



}
