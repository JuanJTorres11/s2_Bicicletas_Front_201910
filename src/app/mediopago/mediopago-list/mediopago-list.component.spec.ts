import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediopagoListComponent } from './mediopago-list.component';

describe('MediopagoListComponent', () => {
  let component: MediopagoListComponent;
  let fixture: ComponentFixture<MediopagoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediopagoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediopagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
