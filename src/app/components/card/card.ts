import { Component, EventEmitter, Input, Output} from '@angular/core';
import Fish from '../../models/Fish';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  //fishes recibe los datos desde el compenente padre
  @Input() fishes!: Fish;
  
  //'delete' emitirá eventos hacia el componente padre
  @Output() delete = new EventEmitter<number>();

  //Funcion que se ejecutara cuando se pulse el boton y elimina al pez con ese id
  onDelete() {
    this.delete.emit(this.fishes.id);
  }
}
