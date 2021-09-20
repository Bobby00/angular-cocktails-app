import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.scss']
})
export class AddCocktailComponent implements OnInit {



  form_title = 'Add a new Cocktail'
  title_add_ingr = "Add Ingredients"
  title_edit_ingr = "Edit Ingredients"
  edit_form_title = 'Edit Cocktail Details'

  image_url : string = ''
  title : string = ''
  category : string = ''
  ingredient1 : string = '' 
  ingredient2 : string = '' 
  ingredient3 : string = '' 
  ingredient4 : string = '' 
  ingredient5 : string = ''  


  constructor(private service: BackendService, private route: ActivatedRoute) { }
  
  successMsg: any
  id: any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    if(this.id) {
      this.service.getSingleCocktail(this.id).subscribe((result) => {
        console.log(result, 'res==>')
        this.image_url = result.drink[0].image_url
        this.title = result.drink[0].title,
        this.category = result.drink[0].category,
        this.ingredient1 = result.drink[0].ingredient1, 
        this.ingredient2 = result.drink[0].ingredient2,
        this.ingredient3 = result.drink[0].ingredient3,
        this.ingredient4 = result.drink[0].ingredient4,
        this.ingredient5 = result.drink[0].ingredient5
      })
    }
    
  }


  // CREATE A NEW COCKTAIL RECORD
  onSubmit() {
    if(!this.title) {
      alert('Please enter a Cocktail name')

    } else if(!this.ingredient1) {
      alert('Plase enter at least one Ingredient')
    }

    const newCocktail = {
      image_url: this.image_url,
      title : this.title,
      category : this.category,
      ingredient1 : this.ingredient1, 
      ingredient2 : this.ingredient2,
      ingredient3 : this.ingredient3,
      ingredient4 : this.ingredient4,
      ingredient5 : this.ingredient5
    }

    // console.log(newCocktail)

    this.service.createCocktail(newCocktail).subscribe((result) => {
      // console.log(result, 'res==>')
      this.successMsg = 'Cocktail successfully added'
    })


    // SETTING FORM FIELDS TO EMPTY AFTER SUCCESSFUL SUBMISSION

    this.image_url = '',
    this.title = '',
    this.category = '',
    this.ingredient1 = '', 
    this.ingredient2 = '',
    this.ingredient3 = '',
    this.ingredient4 = '',
    this.ingredient5 = ''

  }

  // EDIT COCKTAIL RECORD
  onUpdate() {

    const editCocktail = {
      image_url : this.image_url,
      title : this.title,
      category : this.category,
      ingredient1 : this.ingredient1, 
      ingredient2 : this.ingredient2,
      ingredient3 : this.ingredient3,
      ingredient4 : this.ingredient4,
      ingredient5 : this.ingredient5
    } 
    

    if(this.title && this.ingredient1) {
      this.service.updateCocktail(this.id, editCocktail).subscribe((result) => {
        console.log(result, 'Cocktail updated')
        this.successMsg = result.message
      })
      
    } else {
      alert('Please Enter a cocktail name and an ingredient')
    }


  }

}
