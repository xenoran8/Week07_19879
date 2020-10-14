import { Component, OnInit } from '@angular/core';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Place[];
  constructor(
    private recipeService: PlacesService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.places = this.recipeService.getAllPlaces();
  }
}
