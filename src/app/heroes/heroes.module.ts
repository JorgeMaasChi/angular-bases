// Importamos el NgModule
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Importamos nuestros componentes
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

// Utilizamos el decorador
@NgModule({
    // La declaraciones es un arreglo
    // Donde declaramos nuestros componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    // Exports nos permiten definir que componentes van a ser publicos o visibles fuera de este modulo.
    exports: [
        ListadoComponent
    ],

    // Cuando veamos la palabra imports significa que aqui adentro va modulos, usualmente solo modulos son los que se colocan dentro de los imports.
    imports: [
        // Importamos este componente y nos aseguramos que sea importado tambien en la parte de arriba.
        // Por que nos ofrece el uso de las directivas personalizadas de angular
        // entre otras cosas
        CommonModule
    ]
})

// En algular todo es una clase.
export class HeroesModule {

}

// La ventaja de crear nuestros modulos propios para nuestro componente es que ya no vamos a requerir estar modificando en todo momento el modulo principal app.module.ts, mas que solo importar nuestro modulo y darlo de alta en imports.