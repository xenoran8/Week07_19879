import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];
  data2 = 'hehe';
  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes();
  }
  fav(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(recipe.title, 'added to favorite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('share', recipe.title, 'to social media');
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }
}
