import { Component, inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Product } from '../../models/Products';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-pedido-perso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido-perso.component.html',
  styleUrl: './pedido-perso.component.scss'
})

export class PedidoPersoComponent implements OnInit {
  private carritoService = inject(CarritoService);

  @Input() products: Product[] = [];
  @Input() modo: string = '';
  @Input() producto: Product | null = null;
  @Output() close = new EventEmitter<void>();

  public tamanoSeleccionado: number = 0;

  constructor(private productoService: ProductoService) { }

  public productoSeleccionado: Product = {
    id: 0,
    name: '',
    description: '',
    image_url: '',
    category_id: 0,
    price: 0,
    opcionesSeleccionadas: []
  };

  public ngOnInit(): void {
    this, this.productoService.producto$.subscribe((producto) => {
      if (producto) {
        this.productoSeleccionado = producto;
      }
    });
  }

  opcionesAHamburguresa = [
    { id: 'checkQuesoH', texto: 'Extra queso', precioExtra: '$1000', checked: false },
    { id: 'checkPapasH', texto: 'Papas fritas', precioExtra: '$1000', checked: false }
  ]

  opcionesAPapas = [
    { idT: 'pequeno', texto: 'Pequeño', tamanoPrecio: 0, check: false },
    { idT: 'mediano', texto: 'Mediano', tamanoPrecio: 500, check: false },
    { idT: 'grande', texto: 'Grande', tamanoPrecio: 1000, check: false }
  ]

  opcionesAPizzas = [
    { id: 'checkExtraQueso', texto: 'Extra queso', precioExtra: '$1000', checked: false },
    { id: 'checkRelleno', texto: 'Relleno de queso', precioExtra: '$1000', checked: false },
  ]
  opcionesTPizzas = [
    { idT: 'pequenoPizza', texto: 'Individual', tamanoPrecio: 0, check: false },
    { idT: 'medianoPizza', texto: 'Mediano', tamanoPrecio: 2500, check: false },
    { idT: 'familiarPizza', texto: 'Familiar', tamanoPrecio: 5000, check: false }
  ]

  opcionesAPostres = [
    { tamanoSeleccionado: 0 },
    { id: 'checkSalsaChocolate', texto: 'Salsa de chocolate', precioExtra: '$1000', checked: false },
    { id: 'checkCoberturaChocolate', texto: 'Cobertura de Chocolate', precioExtra: '$1000', checked: false }
  ]
  opcionesTPostres = [
    { idT: 'pequenoPostre', texto: 'Pequeño', tamanoPrecio: 0, check: false },
    { idT: 'medianoPostre', texto: 'Mediano', tamanoPrecio: 500, check: false },
    { idT: 'familiarPostre', texto: 'Grande', tamanoPrecio: 1000, check: false }
  ]

  opcionesABebidas = [
    { idT: 'pequenoBebida', tamanoPrecio: 0, check: false },
    { idT: 'medianoBebida', tamanoPrecio: 500, check: false },
    { idT: 'grandeBebida', tamanoPrecio: 1000, check: false }
  ]

  public seleccionarTamano(tamano: string): void {
    this.opcionesAPapas.forEach(opcion => {
      opcion.check = false;
      const opcionSeleccionada = this.opcionesAPapas.find(opcion => opcion.idT === tamano);
      if (opcionSeleccionada) {
        opcionSeleccionada.check = true;
        this.tamanoSeleccionado = opcionSeleccionada.tamanoPrecio;
      }
    });

    this.opcionesTPizzas.forEach(opcion => {
      opcion.check = false;
      const opcionSeleccionada = this.opcionesTPizzas.find(opcion => opcion.idT === tamano);
      if (opcionSeleccionada) {
        opcionSeleccionada.check = true;
        this.tamanoSeleccionado = opcionSeleccionada.tamanoPrecio;
      }
    });

    this.opcionesTPostres.forEach(opcion => {
      opcion.check = false;
      const opcionSeleccionada = this.opcionesTPostres.find(opcion => opcion.idT === tamano);
      if (opcionSeleccionada) {
        opcionSeleccionada.check = true;
        this.tamanoSeleccionado = opcionSeleccionada.tamanoPrecio;
      }
    });

    this.opcionesABebidas.forEach(opcion => {
      opcion.check = false;
      const opcionSeleccionada = this.opcionesABebidas.find(opcion => opcion.idT === tamano);
      if (opcionSeleccionada) {
        opcionSeleccionada.check = true;
        this.tamanoSeleccionado = opcionSeleccionada.tamanoPrecio;
      }
    });




  }

  public calcularTotal() {
    let total = this.tamanoSeleccionado;

    // Sumar el precio de las opciones seleccionadas de la hamburguesa
    this.opcionesAHamburguresa.forEach(opcion => {
      if (opcion.checked) {
        total += parseInt(opcion.precioExtra.replace('$', ''));
      }
    });

    // Sumar el precio de las opciones de papas
    this.opcionesAPapas.forEach(opcion => {
      if (opcion.check) {
        total += opcion.tamanoPrecio;
      }
    });

    // Sumar el precio de las opciones de pizzas
    this.opcionesAPizzas.forEach(opcion => {
      if (opcion.checked) {
        total += parseInt(opcion.precioExtra.replace('$', ''));
      }
    });
    this.opcionesTPizzas.forEach(opcion => {
      if (opcion.check) {
        total += opcion.tamanoPrecio;
      }
    });

    // Sumar el precio de las opciones seleccionadas de postres
    this.opcionesAPostres.forEach(opcion => {
      if (opcion.checked) {
        total += parseInt(opcion.precioExtra.replace('$', ''));
      }
    });
    this.opcionesTPostres.forEach(opcion => {
      if (opcion.check) {
        total += opcion.tamanoPrecio;
      }
    });

    // Sumar el precio de las opciones seleccionadas de bebidas
    this.opcionesABebidas.forEach(opcion => {
      if (opcion.check) {
        total += opcion.tamanoPrecio;
      }
    });
    return total + this.productoSeleccionado.price;
  }

  // Actualiza las opciones seleccionadas del producto
  public actualizarOpcionesSeleccionadas(opcion: any): void {
    if (opcion.checked) {
      this.productoSeleccionado.opcionesSeleccionadas?.push(opcion);
    } else {
      this.productoSeleccionado.opcionesSeleccionadas = this.productoSeleccionado.opcionesSeleccionadas?.filter(o => o.id !== opcion.id);
    }
  }



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

  public onClose(): void {
    this.close.emit();
  }
}
