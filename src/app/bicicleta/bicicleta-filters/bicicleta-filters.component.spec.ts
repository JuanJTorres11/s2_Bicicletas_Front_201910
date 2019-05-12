import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaFiltersComponent } from './bicicleta-filters.component';

describe('BicicletaFiltersComponent', () => {
  let component: BicicletaFiltersComponent;
  let fixture: ComponentFixture<BicicletaFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
