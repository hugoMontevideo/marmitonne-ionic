import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientFormPage } from './ingredient-form.page';

describe('IngredientFormPage', () => {
  let component: IngredientFormPage;
  let fixture: ComponentFixture<IngredientFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngredientFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
