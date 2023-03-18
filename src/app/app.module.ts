import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokeService } from './poke.service';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  declarations: [AppComponent, PokemonComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PokemonComponent,
      },
    ]),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [PokeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
