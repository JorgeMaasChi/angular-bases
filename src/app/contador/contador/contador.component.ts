import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <div>
            <h1>{{ titulo }}</h1>

            <button (click)="calcular(1)"> + 1 </button>
            <span>{{numero}}</span>
            <button (click)="calcular(-1)"> - 1</button>

            <br><br>
            <label>La bases es:
                <strong>{{base}}</strong>
            </label>

            <br>
            <button (click)="acumular(base)"> + {{base}} </button>
            <span>{{numero}}</span>
            <button (click)="acumular(-base)"> - {{base}}</button>
        </div>
    `   
})

export class ContadorComponent {
    titulo : string = 'Contador App';
  
    numero : number = 12;
    base : number = 5;

    calcular(valor : number) {
        this.numero += valor
    }

    acumular(valor : number) {
        this.numero += valor;
    }
}