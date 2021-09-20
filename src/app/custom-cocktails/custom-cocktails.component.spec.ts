import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCocktailsComponent } from './custom-cocktails.component';

describe('CustomCocktailsComponent', () => {
  let component: CustomCocktailsComponent;
  let fixture: ComponentFixture<CustomCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
