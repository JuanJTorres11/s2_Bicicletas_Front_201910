import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAddBicicletaComponent } from './categoria-add-bicicleta.component';

describe('CategoriaAddBicicletaComponent', () => {
  let component: CategoriaAddBicicletaComponent;
  let fixture: ComponentFixture<CategoriaAddBicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaAddBicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaAddBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
