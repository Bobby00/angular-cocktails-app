import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cocktails: Array<any> = [];

  constructor(private _http : HttpService) {  }

  ngOnInit() {
    this._http.getCocktails().subscribe(data => {
      this.cocktails = (data as any).drinks.sort(() => Math.random() - 0.5);
      console.log(data)
    });
  }

}
