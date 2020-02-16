import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionDatosComponent } from './proteccion-datos.component';

describe('ProteccionDatosComponent', () => {
  let component: ProteccionDatosComponent;
  let fixture: ComponentFixture<ProteccionDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteccionDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteccionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
