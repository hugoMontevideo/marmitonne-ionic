import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDetailPage } from './button-detail.page';

describe('ButtonDetailPage', () => {
  let component: ButtonDetailPage;
  let fixture: ComponentFixture<ButtonDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ButtonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
