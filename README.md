# Acuario de Peces - Aplicación Angular

Esta es una aplicación en Angular que permite **gestionar un acuario virtual**.  
Puedes **añadir peces**, **ver la lista de peces en el acuario** y **eliminar peces**.  
La aplicación utiliza **formularios reactivos**, **componentes reutilizables** y un **servicio centralizado** para manejar la lista de peces.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML y CSS
- Formularios reactivos (`ReactiveFormsModule`)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```
2. Ejecutar la aplicación:

```bash
ng serve -o
```
---

## Descripción de los componentes

1. Modelo Fish
Archivo: models/Fish.ts
Define la estructura de un pez en el acuario:

  - id: number → Identificador único del pez.
  - name: string → Nombre del pez.
  - species: string → Especie del pez.
  - size: string → Tamaño del pez.

Sirve para tipar los datos y garantizar consistencia en toda la aplicación.

2. Componente Card
Archivo: components/card/card.ts
  - Recibe un objeto Fish como Input.
  - Permite eliminar el pez mediante un Output que emite el id al componente padre.
  - Contiene la plantilla card.html que muestra:
    - Nombre, especie y tamaño del pez.
    - Botón "Eliminar" que llama a la función onDelete().

3. Componente Create
Archivo: pages/create/create.ts

  - Formulario reactivo para añadir nuevos peces.
  - Campos del formulario: name, species, size (todos requeridos).
Funciones:
  - onSubmit() → Valida el formulario, crea un nuevo Fish y lo agrega mediante FishService.
  - Resetea el formulario tras agregar un pez.
Plantilla (create.html):
  - Inputs ligados al FormGroup (formControlName).
  - Mensajes de error si algún campo es inválido.
  - Botón "Crear pez" deshabilitado si el formulario es inválido.

  4. Componente List
  Archivo: pages/list/list.ts
    - Muestra la lista de peces en el acuario.
    - Recibe un array de Fish como Input y lo actualiza desde FishService.
  Funciones:
    - loadFishes() → Carga los peces desde el servicio.
    - deleteFish(id) → Elimina un pez y recarga la lista.
    - Utiliza el componente Card para mostrar cada pez individualmente.
  Plantilla (list.html):
    - Muestra un mensaje si no hay peces.
    - Itera sobre los peces para mostrarlos en tarjetas (Card).
    - Cada tarjeta permite eliminar su pez correspondiente.

  5. Servicio FishService
  Archivo: services/fish-service.ts
    - Maneja la lógica central del acuario.
  Funciones principales:
    - getList() → Devuelve todos los peces.
    - addFish(fish) → Agrega un pez al acuario.
    - removeFish(id) → Elimina un pez por id.
    - generateId() → Genera un id único para un nuevo pez.
  Mantiene la lista de peces en memoria (fishes: Fish[]).
