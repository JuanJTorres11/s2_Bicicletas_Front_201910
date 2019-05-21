import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorListaDeseosComponent } from './comprador-lista-deseos.component';

describe('CompradorListaDeseosComponent', () => {
  let component: CompradorListaDeseosComponent;
  let fixture: ComponentFixture<CompradorListaDeseosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorListaDeseosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorListaDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
