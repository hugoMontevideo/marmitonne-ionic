import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRecipesPage } from './list-recipes.page';

describe('ListRecipesPage', () => {
  let component: ListRecipesPage;
  let fixture: ComponentFixture<ListRecipesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
