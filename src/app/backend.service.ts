import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  // Make connection to backend server
  apiUrl = 'http://localhost:3000/drinks'

  // get all cocktails data in db
  getAllCocktails():Observable<any> {
    
    return this._http.get(`${this.apiUrl}`)
    
  }

  // Create new Cocktail Data
  createCocktail(data:any):Observable<any> {
    console.log(data, 'create cocktail api')
    return this._http.post(`${this.apiUrl}`,data)
  }

  // Delete Cocktail Data
  deleteCocktail(id:any):Observable<any> {
    let cocktailID = id
    return this._http.delete(`${this.apiUrl}/${cocktailID}`)
  }

  // Update Cocktail Data
  updateCocktail(id:any, data:any):Observable<any> {
    let cocktailID = id
    return this._http.put(`${this.apiUrl}/${cocktailID}`, data)
  }

  // Get Single Cocktail Data
  getSingleCocktail(cID:any):Observable<any> {
    let cocktailID = cID
    return this._http.get(`${this.apiUrl}/${cocktailID}`)
  }

}

