import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // Signal para controlar si el menú móvil está abierto
  menuAbierto = signal(false);

  // Método para alternar el menú
  toggleMenu() {
    this.menuAbierto.update(valor => !valor);
  }

  // Método para cerrar el menú al hacer click en un link
  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}