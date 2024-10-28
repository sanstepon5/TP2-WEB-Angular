import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChercheurPokemonComponent } from './chercheur-pokemon/chercheur-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {PokeApiServiceService} from './poke-api-service.service';
import {HttpClientModule} from '@angular/common/http';

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
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    // PokeApiServiceService,
    importProvidersFrom(PokeApiServiceService)
],
  bootstrap: [AppComponent]
})

export class AppModule { }

