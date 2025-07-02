import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductoComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-catalogo';
}
