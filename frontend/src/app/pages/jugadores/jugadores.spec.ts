import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Jugadores } from './jugadores';

describe('Jugadores', () => {
  let component: Jugadores;
  let fixture: ComponentFixture<Jugadores>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [Jugadores],
    imports: [FormsModule]
  })
  .compileComponents();

  fixture = TestBed.createComponent(Jugadores);
  component = fixture.componentInstance;
  await fixture.whenStable();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
