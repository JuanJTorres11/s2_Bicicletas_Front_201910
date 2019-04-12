import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaEditResenaComponent } from './bicicleta-edit-resena.component';

describe('BicicletaEditResenaComponent', () => {
  let component: BicicletaEditResenaComponent;
  let fixture: ComponentFixture<BicicletaEditResenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaEditResenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaEditResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
