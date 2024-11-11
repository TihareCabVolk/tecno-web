import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  isContactVisible = false; // Controla la visibilidad de la sección de contacto

  toggleContact() {
    this.isContactVisible = !this.isContactVisible; // Alterna la visibilidad
  }

}
