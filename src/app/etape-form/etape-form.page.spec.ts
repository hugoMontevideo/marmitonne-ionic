import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtapeFormPage } from './etape-form.page';

describe('EtapeFormPage', () => {
  let component: EtapeFormPage;
  let fixture: ComponentFixture<EtapeFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EtapeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
