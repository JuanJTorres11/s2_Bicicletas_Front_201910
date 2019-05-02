import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaDeleteComponent } from './bicicleta-delete.component';

describe('BicicletaDeleteComponent', () => {
  let component: BicicletaDeleteComponent;
  let fixture: ComponentFixture<BicicletaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
