import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCocktailDetailComponent } from './custom-cocktail-detail.component';

describe('CustomCocktailDetailComponent', () => {
  let component: CustomCocktailDetailComponent;
  let fixture: ComponentFixture<CustomCocktailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCocktailDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCocktailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
