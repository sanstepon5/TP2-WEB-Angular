import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChercheurPokemonComponent } from './chercheur-pokemon/chercheur-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ChercheurPokemonComponent,
    FilterPokemonPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

