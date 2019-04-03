import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorVentaComponent } from './vendedor-venta.component';

describe('VendedorVentaComponent', () => {
  let component: VendedorVentaComponent;
  let fixture: ComponentFixture<VendedorVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
