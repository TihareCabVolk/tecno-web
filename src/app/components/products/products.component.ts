import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { Product } from '../../models/Products';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { PedidoPersoComponent } from '../pedido-perso/pedido-perso.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, PedidoPersoComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() modo: string = '';

  public productoSeleccionado: Product | null = null;
  public modalAbierto: boolean = false;

  constructor(private productoService: ProductoService) { }

  public ngOnInit(): void { }

  openCard(id: number): void {
    this.productoSeleccionado = this.products.find(p => p.id === id)!;
    this.productoService.setProducto(this.productoSeleccionado);
    this.modalAbierto = true;
  }

  closeCard(): void {
    this.modalAbierto = false;
  }


}
