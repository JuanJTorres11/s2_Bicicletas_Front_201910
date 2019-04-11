import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoEditComponent } from './mediopago-edit.component';

describe('MediopagoEditComponent', () => {
  let component: MediopagoEditComponent;
  let fixture: ComponentFixture<MediopagoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediopagoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediopagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
