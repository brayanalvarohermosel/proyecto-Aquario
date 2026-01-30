import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';

import  Fish  from '../../models/Fish';
import { FishService } from '../../services/fish-service';


@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  // Representa el formulario reactivo donde se ingresan los datos del pez
  fishForm: FormGroup;
  
  // Constructor inyecta FormBuilder para crear formularios y FishService para manejar peces
  constructor(private fb: FormBuilder, public fishService: FishService) {
    // Inicializa cada campo y son obligatorios
    this.fishForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      size: ['', Validators.required],
    });
  }

  onSubmit(): void {
    
    // Verificacion del furmulario y 
    // marca todos los campos como "touched" para mostrar mensajes de error
    if (this.fishForm.invalid) {
      this.fishForm.markAllAsTouched();
      return;
    }

    // Crea un nuevo pez con los datos instroducidos
    const newFish: Fish = {
      id: this.fishService.generateId(),
      name: this.fishForm.value.name,
      species: this.fishForm.value.species,
      size: this.fishForm.value.size,
    };
  
    // Llamada del servicio para añadir un nuevo pez a la lista
    this.fishService.addFish(newFish);
    // Reseteo del formulario
    this.fishForm.reset();
  }
}
