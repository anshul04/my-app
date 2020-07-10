import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartersService } from '../starters.service';

@Component({
  selector: 'app-starters-details',
  templateUrl: './starters-details.component.html',
  styleUrls: ['./starters-details.component.css']
})
export class StartersDetailsComponent implements OnInit {

  rname : any;
  recipe : any;

  constructor(private route:ActivatedRoute, private starterService: StartersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rname = params['rname'];
      //this.recipe = this.starterService.getRecipeByName(this.rname);
    })
  }

}
