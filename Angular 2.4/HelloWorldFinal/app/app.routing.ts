// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';
 
// Componentes
import { SociosComponent } from './socios.component';
import { Index } from './index';
import { CarteleraComponent } from './cartelera.component';
 
// Configuración de las rutas
const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: Index },
  { path: 'socios', component: SociosComponent },
  { path: 'cartelera', component: CarteleraComponent }
];
 
export const routing = RouterModule.forRoot(appRoutes);
