import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChercheurPokemonComponent } from './chercheur-pokemon/chercheur-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ChercheurPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
