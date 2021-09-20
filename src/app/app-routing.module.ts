import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CustomCocktailsComponent } from './custom-cocktails/custom-cocktails.component';
import { AddCocktailComponent } from './add-cocktail/add-cocktail.component';
import { CustomCocktailDetailComponent } from './custom-cocktail-detail/custom-cocktail-detail.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'create/:id', component: AddCocktailComponent },
  { path : 'cocktails', component: ListComponent },
  { path : 'custom-cocktails', component: CustomCocktailsComponent },
  { path : 'search/:searchTerm', component: CustomCocktailsComponent },
  { path : 'custom-cocktails/:id', component: CustomCocktailDetailComponent },
  { path : 'cocktails/:id', component: CocktailDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
