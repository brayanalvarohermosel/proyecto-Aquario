import { Component, Input } from '@angular/core';
import { Card } from '../../components/card/card';

import  Fish  from '../../models/Fish';
import { FishService } from '../../services/fish-service';


@Component({
  selector: 'app-list',
  imports: [Card],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  // Inicializacion del array como vacio
  @Input() fishes: Fish[] = [];

  // Inyecta el servicio de fishService para manejar la lista de peces
  constructor(public fishService: FishService) {}

  ngOnInit(): void {
    // Carga la lista de peces al iniciar el componente
    this.loadFishes();
  }

  //Funcion que obtiene la lista de peces desde el servicio
  loadFishes(): void {
    this.fishes = this.fishService.getList();
  }

  // Funcion que elimina un pez segun su id 
  deleteFish(id: number): void {
    // Llama al servicio para quitar al pez en especifico
    this.fishService.removeFish(id);
    // vuelve a cargar la lista actualizada de peces
    this.loadFishes();
  }
}
