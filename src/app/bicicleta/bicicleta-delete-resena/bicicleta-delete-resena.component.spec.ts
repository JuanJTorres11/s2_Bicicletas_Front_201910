import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaDeleteResenaComponent } from './bicicleta-delete-resena.component';

describe('BicicletaDeleteResenaComponent', () => {
  let component: BicicletaDeleteResenaComponent;
  let fixture: ComponentFixture<BicicletaDeleteResenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaDeleteResenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaDeleteResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
