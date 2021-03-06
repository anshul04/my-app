import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartersService {

  starterRecipe : any;

  starterRecipesCollection = [
    {recipeno:1, name:'Noodles', time:15},
    {recipeno:2, name:'Manchurian'},
    {recipeno:3, name:'Pizza'},
    {recipeno:4, name:'Sandwich'},
    {recipeno:5, name:'Paneer Tikka'}
  ]

  constructor() { }

  getRecipes() {
    return this.starterRecipesCollection;
  }

}
