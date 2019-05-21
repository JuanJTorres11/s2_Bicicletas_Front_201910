import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaBicicletaComponent } from './marca-bicicleta.component';

describe('MarcaBicicletaComponent', () => {
  let component: MarcaBicicletaComponent;
  let fixture: ComponentFixture<MarcaBicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaBicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
