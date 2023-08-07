import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFormPage } from './category-form.page';

describe('CategoryFormPage', () => {
  let component: CategoryFormPage;
  let fixture: ComponentFixture<CategoryFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
