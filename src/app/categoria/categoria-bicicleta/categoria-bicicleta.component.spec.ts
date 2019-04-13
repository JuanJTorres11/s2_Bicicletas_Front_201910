import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBicicletaComponent } from './categoria-bicicleta.component';

describe('CategoriaBicicletaComponent', () => {
  let component: CategoriaBicicletaComponent;
  let fixture: ComponentFixture<CategoriaBicicletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaBicicletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
