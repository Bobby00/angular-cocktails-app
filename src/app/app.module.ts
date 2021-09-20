// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { AddCocktailComponent } from './add-cocktail/add-cocktail.component';


// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomCocktailsComponent } from './custom-cocktails/custom-cocktails.component';
import { CustomCocktailDetailComponent } from './custom-cocktail-detail/custom-cocktail-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CocktailDetailComponent,
    AddCocktailComponent,
    CustomCocktailsComponent,
    CustomCocktailDetailComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
