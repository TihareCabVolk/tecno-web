import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { Product } from '../../models/Products';
import { CarritoService } from '../../services/carrito.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private carritoService = inject(CarritoService);

  constructor() { }

  @Input() products: Product[] = [];
  @Input() modo: string = '';

  opcionesAHamburguresa = [
    { id: 'checkQuesoH', texto: 'Extra queso', precioExtra: '$' + 1000, checked: false },
    { id: 'checkPapasH', texto: 'Papas fritas', precioExtra: '$' + 1000, checked: false }
  ]

  opcionesAPizzas = [
    { id: 'checkExtraQueso', texto: 'Extra queso', precioExtra: '$' + 1000, checked: false },
    { id: 'checkRelleno', texto: 'Relleno de queso', precioExtra: '$' + 1000, checked: false }
  ]

  opcionesAPostres = [
    { id: 'checkSalsaChocolate', texto: 'Salsa de chocolate', precioExtra: '$' + 1000, checked: false },
    { id: 'checkCoberturaChocolate', texto: 'Cobertura de Chocolate', precioExtra: '$' + 1000, checked: false }
  ]

  productoSeleccionado: Product = {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    category_id: 0,
    price: 0,
    opcionesSeleccionadas: []
  };

  actualizarOpcionesSeleccionadas(opcion: any): void {
    if (opcion.checked) {
      this.productoSeleccionado.opcionesSeleccionadas?.push(opcion);
    } else {
      this.productoSeleccionado.opcionesSeleccionadas = this.productoSeleccionado.opcionesSeleccionadas?.filter(o => o.id !== opcion.id);
    }
  }


  public ngOnInit(): void { }

  openCard(id: number): void {
    this.productoSeleccionado = this.products.find(p => p.id === id)!;
  }

  closeCard(): void {
    this.productoSeleccionado = { id: 0, name: '', category_id: 0, price: 0, description: '', image_url: '', opcionesSeleccionadas: [] };
  }

  agregarProducto(item: Product) {
    this.carritoService.agregar(item);
    this.closeCard();
  }
}
