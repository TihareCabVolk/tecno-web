import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { category } from '../../models/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  public categorias:category[] = [
      {
        "id": 1,
        "nombre": "Ofertas",
        "descripcion": "Promociones especiales y combos",
        "img": "https://img.freepik.com/psd-premium/fondo-transparente-alimentos_985276-30363.jpg?w=740"
      },
      {
        "id": 2,
        "nombre": "Hamburguesas",
        "descripcion": "Deliciosas hamburguesas con ingredientes frescos",
        "img": "https://img.freepik.com/foto-gratis/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso_90220-1063.jpg?t=st=1729962855~exp=1729966455~hmac=95d264d5f8d7bea74afe57e95ad906032b0f62f85daf8586baaeb99ea6aa3fc5&w=740"
      },
      {
        "id": 3,
        "nombre": "Papas Fritas",
        "descripcion": "Crocantes papas fritas",
        "img": "https://img.freepik.com/psd-premium/pila-patatas-fritas-crujientes_1234317-2146.jpg?w=740"
      },
      {
        "id": 4,
        "nombre": "Pizzas",
        "descripcion": "Rica pizza y quesosa",
        "img": "https://img.freepik.com/psd-gratis/vista-arriba-sobre-pizza-aislada_23-2151361777.jpg?t=st=1729962632~exp=1729966232~hmac=6c50c1a71d29f44d1c0161dd20f57a9daddf7878841f98be097a823bd8978bec&w=740"
      },
      {
        "id": 5,
        "nombre": "Postres",
        "descripcion": "Dulces y postres para el final perfecto",
        "img":"https://img.freepik.com/fotos-premium/imagen-fotorrealista-hiperrealista-fondo-blanco-generada-freepik_643360-553341.jpg?w=740"
      },
      {
        "id": 6,
        "nombre": "Bebidas",
        "descripcion": "Bebidas refrescantes para acompañar tu comida",
        "img":"https://laterrazadelcanelo.cl/wp-content/uploads/2020/09/coca-cola-350cc.jpg"
      }
    ];
}
