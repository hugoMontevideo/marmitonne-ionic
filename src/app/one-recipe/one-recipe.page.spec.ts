import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneRecipePage } from './one-recipe.page';

describe('OneRecipePage', () => {
  let component: OneRecipePage;
  let fixture: ComponentFixture<OneRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OneRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
