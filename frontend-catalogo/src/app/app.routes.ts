import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductoComponent },
];
