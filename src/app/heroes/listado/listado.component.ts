import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes : string[] = [
    'Iron man',
    'Thor',
    'Hulk',
    'Spiderman'
  ];
  heroes_eliminados : string[] = [];
  

  borrarHeroe() : void {
    const item = this.heroes.pop();
    
    if (item !== undefined) {
      this.heroes_eliminados.push(item);
    }
  }
}
