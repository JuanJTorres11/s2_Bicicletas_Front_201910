import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorVentaAddComponent } from './vendedor-venta-add.component';

describe('VendedorVentaAddComponent', () => {
  let component: VendedorVentaAddComponent;
  let fixture: ComponentFixture<VendedorVentaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorVentaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorVentaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
