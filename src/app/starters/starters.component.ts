import { Component, OnInit } from '@angular/core';
import { StartersService } from '../starters.service';


@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent implements OnInit {

  recipes : any;

  constructor(private starterService: StartersService) { }

  ngOnInit(): void {
    this.recipes = this.starterService.getRecipes();
  }

}
