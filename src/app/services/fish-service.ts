import { Injectable } from '@angular/core';
import Fish from '../models/Fish';


@Injectable({
  providedIn: 'root',
})

export class FishService {
  
  // Array donde se almacenan los peces
  fishes: Fish[];

  constructor(){

    // inicializa el array con un pez por defecto
    this.fishes = [
    { id: 1, name: 'Nemo', species: 'Pez Payaso', size: 'Pequeño' }
  ]
}
  // Funcion que devuelve la cantidad de peces 
  getLenth(): number {
    return this.fishes.length;
  }

  // Funcion que devuelve la lista completa de peces
  getList(): Fish[] {
    return this.fishes;
  }
  
  // Funcion que añade un pez a la lista
  addFish(fish: Fish): void {
    this.fishes.push(fish);
  }
  
  // Funcion que elimina un pez de la lista
  removeFish(id: number): void {
    this.fishes = this.fishes.filter(fish => fish.id !== id);
  }
  
  // funcion que genera un id unico para cada pez nuevo que añadamos
  generateId(): number {
    // Si hay peces en la lista, toma el mayor id y le suma 1
    // En caso de que no hubiera peces en la lista empieza con 1
    return this.fishes.length > 0 ? Math.max(...this.fishes.map(fish => fish.id)) + 1 : 1;
  }
}
