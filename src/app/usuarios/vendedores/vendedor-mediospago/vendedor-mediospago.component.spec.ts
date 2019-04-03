import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorMediospagoComponent } from './vendedor-mediospago.component';

describe('VendedorMediospagoComponent', () => {
  let component: VendedorMediospagoComponent;
  let fixture: ComponentFixture<VendedorMediospagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorMediospagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorMediospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
