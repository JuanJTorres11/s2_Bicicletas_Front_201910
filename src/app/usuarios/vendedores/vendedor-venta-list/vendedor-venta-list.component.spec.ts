import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorVentaListComponent } from './vendedor-venta-list.component';

describe('VendedorVentaListComponent', () => {
  let component: VendedorVentaListComponent;
  let fixture: ComponentFixture<VendedorVentaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorVentaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorVentaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
