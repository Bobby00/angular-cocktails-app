import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit {
  id : any
  link : any
  cocktail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.link = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.id

    this.http.get(this.link).subscribe(data => {
      this.cocktail = (data as any).drinks
      console.log(data)
    })

  }

}
