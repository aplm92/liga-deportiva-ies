import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clasificaciones } from './clasificaciones';

describe('Clasificaciones', () => {
  let component: Clasificaciones;
  let fixture: ComponentFixture<Clasificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clasificaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clasificaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
