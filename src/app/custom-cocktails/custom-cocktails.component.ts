import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-cocktails',
  templateUrl: './custom-cocktails.component.html',
  styleUrls: ['./custom-cocktails.component.scss']
})
export class CustomCocktailsComponent implements OnInit {

  filterTerm!: string;


  constructor(private service: BackendService) { }

  cocktails : any
  successMsg: any


  ngOnInit(): void {
        this.getAllCocktails()    
  }

  deleteCocktail(id:any) {
    console.log(id, 'deleted cocktail id')
    this.service.deleteCocktail(id).subscribe((result) => {
      console.log(result, 'deleted Cocktail');
      this.successMsg = result.message
      this.getAllCocktails()
    })
    
  }

  getAllCocktails() {
    this.service.getAllCocktails().subscribe((result) => {
      console.log(result, 'res==>')
      this.cocktails = result.drinks
    })
  }

}
