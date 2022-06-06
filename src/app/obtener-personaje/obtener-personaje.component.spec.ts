import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPersonajeComponent } from './obtener-personaje.component';

describe('ObtenerPersonajeComponent', () => {
  let component: ObtenerPersonajeComponent;
  let fixture: ComponentFixture<ObtenerPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
