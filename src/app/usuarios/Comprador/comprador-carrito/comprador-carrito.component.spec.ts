import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorCarritoComponent } from './comprador-carrito.component';

describe('CompradorCarritoComponent', () => {
  let component: CompradorCarritoComponent;
  let fixture: ComponentFixture<CompradorCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
