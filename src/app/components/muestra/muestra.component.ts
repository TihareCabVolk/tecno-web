import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Cupon } from '../../models/cupon';
import { Products } from '../../models/Products';
@Component({
  selector: 'app-muestra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './muestra.component.html',
  styleUrl: './muestra.component.css',
})
export class MuestraComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.fetchCupones();
  }

  public cupones: Cupon[] = []; // Lista de Cupones

  private fetchCupones(): void {
    this.auth.getAllCupones().subscribe({
      next: (data: Cupon[]) => {
        this.cupones = data;
      },
      error: (err) => {
        console.error('Error al obtener los cupones:', err.message);
      },
    });

    console.log(this.cupones);
  }
}
