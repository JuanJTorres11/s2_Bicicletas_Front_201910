import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaReviewComponent } from './venta-review.component';

describe('VentaReviewComponent', () => {
  let component: VentaReviewComponent;
  let fixture: ComponentFixture<VentaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
