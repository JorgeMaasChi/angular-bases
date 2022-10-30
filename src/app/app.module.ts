import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Aqui damos de alta nuestro component
import { AppComponent } from './app.component';

// Importamos nuestros modulos propios
import { HeroesModule } from "./heroes/heroes.module";
import { ContadorModule } from "./contador/contador.module";

@NgModule({
  // Aqui declaramos nuestros modulos.
  declarations: [
    AppComponent,
  ],

  // Aqui importamos nuestros modulos creados
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
