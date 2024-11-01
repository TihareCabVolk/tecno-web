import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../models/Products';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class WcdonaldsService {

  private products:Product[] = [
    new Product(1,"Hamburguesa Italiana","",1000,"https://img.freepik.com/vector-premium/vector-dibujo-hamburguesa-sobre-fondo-blanco_176841-1304.jpg",2),
  ];
  
  private categories:Category[] = [
    new Category(
      1,
      "Ofertas",
      "Promociones especiales y combos",
      "https://img.freepik.com/psd-premium/fondo-transparente-alimentos_985276-30363.jpg?w=740"
    ),
    new Category(
      2,
      "Hamburguesas",
      "Deliciosas hamburguesas con ingredientes frescos",
      "https://img.freepik.com/foto-gratis/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso_90220-1063.jpg?t=st=1729962855~exp=1729966455~hmac=95d264d5f8d7bea74afe57e95ad906032b0f62f85daf8586baaeb99ea6aa3fc5&w=740"
    ),
    new Category(
      3,
      "Papas Fritas",
      "Crocantes papas fritas",
      "https://img.freepik.com/psd-premium/pila-patatas-fritas-crujientes_1234317-2146.jpg?w=740"
    ),
    new Category(
      4,
      "Pizzas",
      "Rica pizza y quesosa",
      "https://img.freepik.com/psd-gratis/vista-arriba-sobre-pizza-aislada_23-2151361777.jpg?t=st=1729962632~exp=1729966232~hmac=6c50c1a71d29f44d1c0161dd20f57a9daddf7878841f98be097a823bd8978bec&w=740"
    ),
    new Category(
      5,
      "Postres",
      "Dulces y postres para el final perfecto",
      "https://img.freepik.com/fotos-premium/imagen-fotorrealista-hiperrealista-fondo-blanco-generada-freepik_643360-553341.jpg?w=740"
    ),
    new Category(
      6,
      "Bebidas",
      "Bebidas refrescantes para acompañar tu comida",
      "https://laterrazadelcanelo.cl/wp-content/uploads/2020/09/coca-cola-350cc.jpg"
    )
  ];

  private $productsSubjet:BehaviorSubject<Product[]>;
  private $categoriesSubjet:BehaviorSubject<Category[]>;

  constructor(){
    this.$productsSubjet = new BehaviorSubject(this.products);
    this.$categoriesSubjet = new BehaviorSubject(this.categories);
  }

  loadAllCategory():Observable<Category[]>{
    return this.$categoriesSubjet.asObservable();
  }

  loadAllProducts(): Observable<Product[]> {
    return this.$productsSubjet.asObservable();
  }
}
