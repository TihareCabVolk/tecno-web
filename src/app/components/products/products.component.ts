import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../interfaces/Products';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

    constructor(){};

    @Input() products:Products[]=[];
    @Input() modo: string = '';
    

    public productoSeleccionado: number = 0;


    public ngOnInit(): void {
        
    }

    openCard(id:number): void {
      this.productoSeleccionado = id;
    }

    closeCard(): void {
      this.productoSeleccionado = 0;
    }

    agregarAlPedido(id:number): void {
      // Aquí puedes agregar la lógica para añadir el producto al pedido
      console.log('Producto agregado:', id);
      this.closeCard(); // Cerrar el card flotante
    }
    
}
