import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBicicletasPromocionComponent } from './home-bicicletas-promocion.component';

describe('HomeBicicletasPromocionComponent', () => {
  let component: HomeBicicletasPromocionComponent;
  let fixture: ComponentFixture<HomeBicicletasPromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBicicletasPromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBicicletasPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
