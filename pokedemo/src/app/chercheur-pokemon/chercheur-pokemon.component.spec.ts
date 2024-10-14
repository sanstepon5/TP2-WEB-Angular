import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercheurPokemonComponent } from './chercheur-pokemon.component';

describe('ChercheurPokemonComponent', () => {
  let component: ChercheurPokemonComponent;
  let fixture: ComponentFixture<ChercheurPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChercheurPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercheurPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
