import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-custom-cocktail-detail',
  templateUrl: './custom-cocktail-detail.component.html',
  styleUrls: ['./custom-cocktail-detail.component.scss']
})
export class CustomCocktailDetailComponent implements OnInit {

  id : any
  cocktail: any


  constructor(private service: BackendService, private route: ActivatedRoute) { }

  getCocktail () {
    this.id = this.route.snapshot.paramMap.get('id')
    this.service.getSingleCocktail(this.id).subscribe((result) => {
      // console.log(result, 'Success')
      this.cocktail = result.drink
      console.log(this.cocktail)
    })
  }

  ngOnInit(): void {
    this.getCocktail()
  }

}
