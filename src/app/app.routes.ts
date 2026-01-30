import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { Create } from './pages/create/create';

export const routes: Routes = [
   // Ruta principal que carga el componente Home
   { path: '', component: Home },
   // Ruta /list que carga el componente List para mostrar los peces del acuario
   { path: 'list', component: List },
   // Ruta /create que carga el componente Create para añadir un nuevo pez
   { path: 'create', component: Create },
];
