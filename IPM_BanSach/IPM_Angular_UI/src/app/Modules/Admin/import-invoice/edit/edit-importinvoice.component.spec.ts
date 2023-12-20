import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImportInvoiceComponent } from './edit-importinvoice.component';

describe('EditImportInvoiceComponent', () => {
  let component: EditImportInvoiceComponent;
  let fixture: ComponentFixture<EditImportInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditImportInvoiceComponent]
    });
    fixture = TestBed.createComponent(EditImportInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
