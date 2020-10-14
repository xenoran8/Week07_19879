import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://housing.umn.edu/sites/housing.umn.edu/files/radius_exterior.jpg',
      price: 'Rp. 500,000.00 / night',
    },
    {
      id: 'p2',
      title: 'Serpong Apartment',
      description: 'Apartment for Everyone',
      imageUrl: 'https://cdn2.tstatic.net/wartakota/foto/bank/images/20180131-serpong-garden-apartment-005_20180131_111553.jpg',
      price: 'Rp. 650,000.00 / night',
    },
    {
      id: 'p3',
      title: 'JKT Apartment',
      description: 'Apartment for Rich People',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/BiOOWyzLrwlJ1kJG5rDspSeoZVdcxN_9klpP3F8JZtAzlSTStxMKbbVjRDVxQvItV_AnXc_W08p2_O4jjh774Eqi79eo3ZhEJhSmQofMPtZME6MAI2ogKcxs3hkSwceK16X93lmyzmJ-nQC8rs3fzpJXg5V5scP8',
      price: 'Rp. 1,000,000.00 / night',
    }
  ]
  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string){
    return this.places.find(place => {
      return place.id === placeId;
    })
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    })
  }
}
