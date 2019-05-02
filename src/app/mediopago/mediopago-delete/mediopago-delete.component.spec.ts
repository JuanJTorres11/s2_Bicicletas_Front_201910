import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoDeleteComponent } from './mediopago-delete.component';

describe('MediopagoDeleteComponent', () => {
  let component: MediopagoDeleteComponent;
  let fixture: ComponentFixture<MediopagoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediopagoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediopagoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
