import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorProcesoCompraComponent } from './comprador-proceso-compra.component';

describe('CompradorProcesoCompraComponent', () => {
  let component: CompradorProcesoCompraComponent;
  let fixture: ComponentFixture<CompradorProcesoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorProcesoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorProcesoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
