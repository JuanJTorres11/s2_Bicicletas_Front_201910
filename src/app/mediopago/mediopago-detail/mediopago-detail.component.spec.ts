import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoDetailComponent } from './mediopago-detail.component';

describe('MediopagoDetailComponent', () => {
  let component: MediopagoDetailComponent;
  let fixture: ComponentFixture<MediopagoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediopagoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediopagoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
