import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoAddComponent } from './mediopago-add.component';

describe('MediopagoAddComponent', () => {
  let component: MediopagoAddComponent;
  let fixture: ComponentFixture<MediopagoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediopagoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediopagoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
