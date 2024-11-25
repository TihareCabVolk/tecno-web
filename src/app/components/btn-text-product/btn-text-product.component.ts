import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { ProductsOrder } from '../../interfaces/Orders/ProductOrder';

@Component({
  selector: 'app-btn-text-product',
  standalone: true,
  imports: [],
  templateUrl: './btn-text-product.component.html',
  styleUrl: './btn-text-product.component.scss'
})
export class BtnTextProductComponent {
  constructor(private server:CarritoService){}

  public agregar():void{
    const producto:ProductsOrder = {
      product_id: 1,
    name: 'coca cola',
    description: '',
    price: 4500,
    img_url: '',
    quantity: 0,
    category_id: 3,
    addons: [] 
    }
    this.server.agregar(producto);
  }
}
