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
  brands:Brand[] = []
  colors:Color[] = []
  constructor(private carService:CarService,
              private colorService:ColorService,
              private brandService:BrandService
  ){}

  

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })
  }

  getColorName(colorId:number){
    return colorId ? this.colors.find(c => c.colorId == colorId)?.colorName: "Belirlenmemiş Renk"
  }


  getBrandName(brandId:number){
    return brandId ? this.brands.find(c => c.brandId == brandId)?.brandName: "Belirlenmemiş Marka"
  }

}
