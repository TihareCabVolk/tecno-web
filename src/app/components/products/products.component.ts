import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{
    @Input() modo: string = '';
    public allProductos = [
      {
        "id": 1,
        "name": "Producto 1",
        "description": "Descripción del producto 1, con detalles únicos.",
        "price": 1.5,
        "image_url": "https://example.com/images/producto-1.jpg",
        "category_id": 1
      },
      {
        "id": 2,
        "name": "Producto 2",
        "description": "Descripción del producto 2, con detalles únicos.",
        "price": 1.6,
        "image_url": "https://example.com/images/producto-2.jpg",
        "category_id": 2
      },
      {
        "id": 3,
        "name": "Producto 3",
        "description": "Descripción del producto 3, con detalles únicos.",
        "price": 1.7,
        "image_url": "https://example.com/images/producto-3.jpg",
        "category_id": 3
      },
      {
        "id": 4,
        "name": "Producto 4",
        "description": "Descripción del producto 4, con detalles únicos.",
        "price": 1.8,
        "image_url": "https://example.com/images/producto-4.jpg",
        "category_id": 4
      },
      {
        "id": 5,
        "name": "Producto 5",
        "description": "Descripción del producto 5, con detalles únicos.",
        "price": 1.9,
        "image_url": "https://example.com/images/producto-5.jpg",
        "category_id": 5
      },
      {
        "id": 6,
        "name": "Producto 6",
        "description": "Descripción del producto 6, con detalles únicos.",
        "price": 2.0,
        "image_url": "https://example.com/images/producto-6.jpg",
        "category_id": 1
      },
      {
        "id": 7,
        "name": "Producto 7",
        "description": "Descripción del producto 7, con detalles únicos.",
        "price": 2.1,
        "image_url": "https://example.com/images/producto-7.jpg",
        "category_id": 2
      },
      {
        "id": 8,
        "name": "Producto 8",
        "description": "Descripción del producto 8, con detalles únicos.",
        "price": 2.2,
        "image_url": "https://example.com/images/producto-8.jpg",
        "category_id": 3
      },
      {
        "id": 9,
        "name": "Producto 9",
        "description": "Descripción del producto 9, con detalles únicos.",
        "price": 2.3,
        "image_url": "https://example.com/images/producto-9.jpg",
        "category_id": 4
      },
      {
        "id": 10,
        "name": "Producto 10",
        "description": "Descripción del producto 10, con detalles únicos.",
        "price": 2.4,
        "image_url": "https://example.com/images/producto-10.jpg",
        "category_id": 5
      },
      {
        "id": 11,
        "name": "Producto 11",
        "description": "Descripción del producto 11, con detalles únicos.",
        "price": 2.5,
        "image_url": "https://example.com/images/producto-11.jpg",
        "category_id": 1
      },
      {
        "id": 12,
        "name": "Producto 12",
        "description": "Descripción del producto 12, con detalles únicos.",
        "price": 2.6,
        "image_url": "https://example.com/images/producto-12.jpg",
        "category_id": 2
      },
      {
        "id": 13,
        "name": "Producto 13",
        "description": "Descripción del producto 13, con detalles únicos.",
        "price": 2.7,
        "image_url": "https://example.com/images/producto-13.jpg",
        "category_id": 3
      },
      {
        "id": 14,
        "name": "Producto 14",
        "description": "Descripción del producto 14, con detalles únicos.",
        "price": 2.8,
        "image_url": "https://example.com/images/producto-14.jpg",
        "category_id": 4
      },
      {
        "id": 15,
        "name": "Producto 15",
        "description": "Descripción del producto 15, con detalles únicos.",
        "price": 2.9,
        "image_url": "https://example.com/images/producto-15.jpg",
        "category_id": 5
      },
      {
        "id": 16,
        "name": "Producto 16",
        "description": "Descripción del producto 16, con detalles únicos.",
        "price": 3.0,
        "image_url": "https://example.com/images/producto-16.jpg",
        "category_id": 1
      },
      {
        "id": 17,
        "name": "Producto 17",
        "description": "Descripción del producto 17, con detalles únicos.",
        "price": 3.1,
        "image_url": "https://example.com/images/producto-17.jpg",
        "category_id": 2
      },
      {
        "id": 18,
        "name": "Producto 18",
        "description": "Descripción del producto 18, con detalles únicos.",
        "price": 3.2,
        "image_url": "https://example.com/images/producto-18.jpg",
        "category_id": 3
      },
      {
        "id": 19,
        "name": "Producto 19",
        "description": "Descripción del producto 19, con detalles únicos.",
        "price": 3.3,
        "image_url": "https://example.com/images/producto-19.jpg",
        "category_id": 4
      },
      {
        "id": 20,
        "name": "Producto 20",
        "description": "Descripción del producto 20, con detalles únicos.",
        "price": 3.4,
        "image_url": "https://example.com/images/producto-20.jpg",
        "category_id": 5
      },
      {
        "id": 21,
        "name": "Producto 21",
        "description": "Descripción del producto 21, con detalles únicos.",
        "price": 3.5,
        "image_url": "https://example.com/images/producto-21.jpg",
        "category_id": 1
      },
      {
        "id": 22,
        "name": "Producto 22",
        "description": "Descripción del producto 22, con detalles únicos.",
        "price": 3.6,
        "image_url": "https://example.com/images/producto-22.jpg",
        "category_id": 2
      },
      {
        "id": 23,
        "name": "Producto 23",
        "description": "Descripción del producto 23, con detalles únicos.",
        "price": 3.7,
        "image_url": "https://example.com/images/producto-23.jpg",
        "category_id": 3
      },
      {
        "id": 24,
        "name": "Producto 24",
        "description": "Descripción del producto 24, con detalles únicos.",
        "price": 3.8,
        "image_url": "https://example.com/images/producto-24.jpg",
        "category_id": 4
      },
      {
        "id": 25,
        "name": "Producto 25",
        "description": "Descripción del producto 25, con detalles únicos.",
        "price": 3.9,
        "image_url": "https://example.com/images/producto-25.jpg",
        "category_id": 5
      },
      {
        "id": 26,
        "name": "Producto 26",
        "description": "Descripción del producto 26, con detalles únicos.",
        "price": 4.0,
        "image_url": "https://example.com/images/producto-26.jpg",
        "category_id": 1
      },
      {
        "id": 27,
        "name": "Producto 27",
        "description": "Descripción del producto 27, con detalles únicos.",
        "price": 4.1,
        "image_url": "https://example.com/images/producto-27.jpg",
        "category_id": 2
      },
      {
        "id": 28,
        "name": "Producto 28",
        "description": "Descripción del producto 28, con detalles únicos.",
        "price": 4.2,
        "image_url": "https://example.com/images/producto-28.jpg",
        "category_id": 3
      },
      {
        "id": 29,
        "name": "Producto 29",
        "description": "Descripción del producto 29, con detalles únicos.",
        "price": 4.3,
        "image_url": "https://example.com/images/producto-29.jpg",
        "category_id": 4
      },
      {
        "id": 30,
        "name": "Producto 30",
        "description": "Descripción del producto 30, con detalles únicos.",
        "price": 4.4,
        "image_url": "https://example.com/images/producto-30.jpg",
        "category_id": 5
      },
      {
        "id": 31,
        "name": "Producto 31",
        "description": "Descripción del producto 31, con detalles únicos.",
        "price": 4.5,
        "image_url": "https://example.com/images/producto-31.jpg",
        "category_id": 1
      },
      {
        "id": 32,
        "name": "Producto 32",
        "description": "Descripción del producto 32, con detalles únicos.",
        "price": 4.6,
        "image_url": "https://example.com/images/producto-32.jpg",
        "category_id": 2
      },
      {
        "id": 33,
        "name": "Producto 33",
        "description": "Descripción del producto 33, con detalles únicos.",
        "price": 4.7,
        "image_url": "https://example.com/images/producto-33.jpg",
        "category_id": 3
      },
      {
        "id": 34,
        "name": "Producto 34",
        "description": "Descripción del producto 34, con detalles únicos.",
        "price": 4.8,
        "image_url": "https://example.com/images/producto-34.jpg",
        "category_id": 4
      },
      {
        "id": 35,
        "name": "Producto 35",
        "description": "Descripción del producto 35, con detalles únicos.",
        "price": 4.9,
        "image_url": "https://example.com/images/producto-35.jpg",
        "category_id": 5
      },
      {
        "id": 36,
        "name": "Producto 36",
        "description": "Descripción del producto 36, con detalles únicos.",
        "price": 5.0,
        "image_url": "https://example.com/images/producto-36.jpg",
        "category_id": 1
      },
      {
        "id": 37,
        "name": "Producto 37",
        "description": "Descripción del producto 37, con detalles únicos.",
        "price": 5.1,
        "image_url": "https://example.com/images/producto-37.jpg",
        "category_id": 2
      },
      {
        "id": 38,
        "name": "Producto 38",
        "description": "Descripción del producto 38, con detalles únicos.",
        "price": 5.2,
        "image_url": "https://example.com/images/producto-38.jpg",
        "category_id": 3
      },
      {
        "id": 39,
        "name": "Producto 39",
        "description": "Descripción del producto 39, con detalles únicos.",
        "price": 5.3,
        "image_url": "https://example.com/images/producto-39.jpg",
        "category_id": 4
      },
      {
        "id": 40,
        "name": "Producto 40",
        "description": "Descripción del producto 40, con detalles únicos.",
        "price": 5.4,
        "image_url": "https://example.com/images/producto-40.jpg",
        "category_id": 5
      },
      {
        "id": 41,
        "name": "Producto 41",
        "description": "Descripción del producto 41, con detalles únicos.",
        "price": 5.5,
        "image_url": "https://example.com/images/producto-41.jpg",
        "category_id": 1
      },
      {
        "id": 42,
        "name": "Producto 42",
        "description": "Descripción del producto 42, con detalles únicos.",
        "price": 5.6,
        "image_url": "https://example.com/images/producto-42.jpg",
        "category_id": 2
      },
      {
        "id": 43,
        "name": "Producto 43",
        "description": "Descripción del producto 43, con detalles únicos.",
        "price": 5.7,
        "image_url": "https://example.com/images/producto-43.jpg",
        "category_id": 3
      },
      {
        "id": 44,
        "name": "Producto 44",
        "description": "Descripción del producto 44, con detalles únicos.",
        "price": 5.8,
        "image_url": "https://example.com/images/producto-44.jpg",
        "category_id": 4
      },
      {
        "id": 45,
        "name": "Producto 45",
        "description": "Descripción del producto 45, con detalles únicos.",
        "price": 5.9,
        "image_url": "https://example.com/images/producto-45.jpg",
        "category_id": 5
      },
      {
        "id": 46,
        "name": "Producto 46",
        "description": "Descripción del producto 46, con detalles únicos.",
        "price": 6.0,
        "image_url": "https://example.com/images/producto-46.jpg",
        "category_id": 1
      },
      {
        "id": 47,
        "name": "Producto 47",
        "description": "Descripción del producto 47, con detalles únicos.",
        "price": 6.1,
        "image_url": "https://example.com/images/producto-47.jpg",
        "category_id": 2
      },
      {
        "id": 48,
        "name": "Producto 48",
        "description": "Descripción del producto 48, con detalles únicos.",
        "price": 6.2,
        "image_url": "https://example.com/images/producto-48.jpg",
        "category_id": 3
      },
      {
        "id": 49,
        "name": "Producto 49",
        "description": "Descripción del producto 49, con detalles únicos.",
        "price": 6.3,
        "image_url": "https://example.com/images/producto-49.jpg",
        "category_id": 4
      },
      {
        "id": 50,
        "name": "Producto 50",
        "description": "Descripción del producto 50, con detalles únicos.",
        "price": 6.4,
        "image_url": "https://example.com/images/producto-50.jpg",
        "category_id": 5
      },
      {
        "id": 51,
        "name": "Producto 51",
        "description": "Descripción del producto 51, con detalles únicos.",
        "price": 6.5,
        "image_url": "https://example.com/images/producto-51.jpg",
        "category_id": 1
      },
      {
        "id": 52,
        "name": "Producto 52",
        "description": "Descripción del producto 52, con detalles únicos.",
        "price": 6.6,
        "image_url": "https://example.com/images/producto-52.jpg",
        "category_id": 2
      },
      {
        "id": 53,
        "name": "Producto 53",
        "description": "Descripción del producto 53, con detalles únicos.",
        "price": 6.7,
        "image_url": "https://example.com/images/producto-53.jpg",
        "category_id": 3
      },
      {
        "id": 54,
        "name": "Producto 54",
        "description": "Descripción del producto 54, con detalles únicos.",
        "price": 6.8,
        "image_url": "https://example.com/images/producto-54.jpg",
        "category_id": 4
      },
      {
        "id": 55,
        "name": "Producto 55",
        "description": "Descripción del producto 55, con detalles únicos.",
        "price": 6.9,
        "image_url": "https://example.com/images/producto-55.jpg",
        "category_id": 5
      },
      {
        "id": 56,
        "name": "Producto 56",
        "description": "Descripción del producto 56, con detalles únicos.",
        "price": 7.0,
        "image_url": "https://example.com/images/producto-56.jpg",
        "category_id": 1
      },
      {
        "id": 57,
        "name": "Producto 57",
        "description": "Descripción del producto 57, con detalles únicos.",
        "price": 7.1,
        "image_url": "https://example.com/images/producto-57.jpg",
        "category_id": 2
      },
      {
        "id": 58,
        "name": "Producto 58",
        "description": "Descripción del producto 58, con detalles únicos.",
        "price": 7.2,
        "image_url": "https://example.com/images/producto-58.jpg",
        "category_id": 3
      },
      {
        "id": 59,
        "name": "Producto 59",
        "description": "Descripción del producto 59, con detalles únicos.",
        "price": 7.3,
        "image_url": "https://example.com/images/producto-59.jpg",
        "category_id": 4
      },
      {
        "id": 60,
        "name": "Producto 60",
        "description": "Descripción del producto 60, con detalles únicos.",
        "price": 7.4,
        "image_url": "https://example.com/images/producto-60.jpg",
        "category_id": 5
      },
      {
        "id": 61,
        "name": "Producto 61",
        "description": "Descripción del producto 61, con detalles únicos.",
        "price": 7.5,
        "image_url": "https://example.com/images/producto-61.jpg",
        "category_id": 1
      },
      {
        "id": 62,
        "name": "Producto 62",
        "description": "Descripción del producto 62, con detalles únicos.",
        "price": 7.6,
        "image_url": "https://example.com/images/producto-62.jpg",
        "category_id": 2
      },
      {
        "id": 63,
        "name": "Producto 63",
        "description": "Descripción del producto 63, con detalles únicos.",
        "price": 7.7,
        "image_url": "https://example.com/images/producto-63.jpg",
        "category_id": 3
      },
      {
        "id": 64,
        "name": "Producto 64",
        "description": "Descripción del producto 64, con detalles únicos.",
        "price": 7.8,
        "image_url": "https://example.com/images/producto-64.jpg",
        "category_id": 4
      },
      {
        "id": 65,
        "name": "Producto 65",
        "description": "Descripción del producto 65, con detalles únicos.",
        "price": 7.9,
        "image_url": "https://example.com/images/producto-65.jpg",
        "category_id": 5
      },
      {
        "id": 66,
        "name": "Producto 66",
        "description": "Descripción del producto 66, con detalles únicos.",
        "price": 8.0,
        "image_url": "https://example.com/images/producto-66.jpg",
        "category_id": 1
      },
      {
        "id": 67,
        "name": "Producto 67",
        "description": "Descripción del producto 67, con detalles únicos.",
        "price": 8.1,
        "image_url": "https://example.com/images/producto-67.jpg",
        "category_id": 2
      },
      {
        "id": 68,
        "name": "Producto 68",
        "description": "Descripción del producto 68, con detalles únicos.",
        "price": 8.2,
        "image_url": "https://example.com/images/producto-68.jpg",
        "category_id": 3
      },
      {
        "id": 69,
        "name": "Producto 69",
        "description": "Descripción del producto 69, con detalles únicos.",
        "price": 8.3,
        "image_url": "https://example.com/images/producto-69.jpg",
        "category_id": 4
      },
      {
        "id": 70,
        "name": "Producto 70",
        "description": "Descripción del producto 70, con detalles únicos.",
        "price": 8.4,
        "image_url": "https://example.com/images/producto-70.jpg",
        "category_id": 5
      },
      {
        "id": 71,
        "name": "Producto 71",
        "description": "Descripción del producto 71, con detalles únicos.",
        "price": 8.5,
        "image_url": "https://example.com/images/producto-71.jpg",
        "category_id": 1
      },
      {
        "id": 72,
        "name": "Producto 72",
        "description": "Descripción del producto 72, con detalles únicos.",
        "price": 8.6,
        "image_url": "https://example.com/images/producto-72.jpg",
        "category_id": 2
      },
      {
        "id": 73,
        "name": "Producto 73",
        "description": "Descripción del producto 73, con detalles únicos.",
        "price": 8.7,
        "image_url": "https://example.com/images/producto-73.jpg",
        "category_id": 3
      },
      {
        "id": 74,
        "name": "Producto 74",
        "description": "Descripción del producto 74, con detalles únicos.",
        "price": 8.8,
        "image_url": "https://example.com/images/producto-74.jpg",
        "category_id": 4
      },
      {
        "id": 75,
        "name": "Producto 75",
        "description": "Descripción del producto 75, con detalles únicos.",
        "price": 8.9,
        "image_url": "https://example.com/images/producto-75.jpg",
        "category_id": 5
      },
      {
        "id": 76,
        "name": "Producto 76",
        "description": "Descripción del producto 76, con detalles únicos.",
        "price": 9.0,
        "image_url": "https://example.com/images/producto-76.jpg",
        "category_id": 1
      },
      {
        "id": 77,
        "name": "Producto 77",
        "description": "Descripción del producto 77, con detalles únicos.",
        "price": 9.1,
        "image_url": "https://example.com/images/producto-77.jpg",
        "category_id": 2
      },
      {
        "id": 78,
        "name": "Producto 78",
        "description": "Descripción del producto 78, con detalles únicos.",
        "price": 9.2,
        "image_url": "https://example.com/images/producto-78.jpg",
        "category_id": 3
      },
      {
        "id": 79,
        "name": "Producto 79",
        "description": "Descripción del producto 79, con detalles únicos.",
        "price": 9.3,
        "image_url": "https://example.com/images/producto-79.jpg",
        "category_id": 4
      },
      {
        "id": 80,
        "name": "Producto 80",
        "description": "Descripción del producto 80, con detalles únicos.",
        "price": 9.4,
        "image_url": "https://example.com/images/producto-80.jpg",
        "category_id": 5
      },
      {
        "id": 81,
        "name": "Producto 81",
        "description": "Descripción del producto 81, con detalles únicos.",
        "price": 9.5,
        "image_url": "https://example.com/images/producto-81.jpg",
        "category_id": 1
      },
      {
        "id": 82,
        "name": "Producto 82",
        "description": "Descripción del producto 82, con detalles únicos.",
        "price": 9.6,
        "image_url": "https://example.com/images/producto-82.jpg",
        "category_id": 2
      },
      {
        "id": 83,
        "name": "Producto 83",
        "description": "Descripción del producto 83, con detalles únicos.",
        "price": 9.7,
        "image_url": "https://example.com/images/producto-83.jpg",
        "category_id": 3
      },
      {
        "id": 84,
        "name": "Producto 84",
        "description": "Descripción del producto 84, con detalles únicos.",
        "price": 9.8,
        "image_url": "https://example.com/images/producto-84.jpg",
        "category_id": 4
      },
      {
        "id": 85,
        "name": "Producto 85",
        "description": "Descripción del producto 85, con detalles únicos.",
        "price": 9.9,
        "image_url": "https://example.com/images/producto-85.jpg",
        "category_id": 5
      },
      {
        "id": 86,
        "name": "Producto 86",
        "description": "Descripción del producto 86, con detalles únicos.",
        "price": 10.0,
        "image_url": "https://example.com/images/producto-86.jpg",
        "category_id": 1
      },
      {
        "id": 87,
        "name": "Producto 87",
        "description": "Descripción del producto 87, con detalles únicos.",
        "price": 10.1,
        "image_url": "https://example.com/images/producto-87.jpg",
        "category_id": 2
      },
      {
        "id": 88,
        "name": "Producto 88",
        "description": "Descripción del producto 88, con detalles únicos.",
        "price": 10.2,
        "image_url": "https://example.com/images/producto-88.jpg",
        "category_id": 3
      },
      {
        "id": 89,
        "name": "Producto 89",
        "description": "Descripción del producto 89, con detalles únicos.",
        "price": 10.3,
        "image_url": "https://example.com/images/producto-89.jpg",
        "category_id": 4
      },
      {
        "id": 90,
        "name": "Producto 90",
        "description": "Descripción del producto 90, con detalles únicos.",
        "price": 10.4,
        "image_url": "https://example.com/images/producto-90.jpg",
        "category_id": 5
      },
      {
        "id": 91,
        "name": "Producto 91",
        "description": "Descripción del producto 91, con detalles únicos.",
        "price": 10.5,
        "image_url": "https://example.com/images/producto-91.jpg",
        "category_id": 1
      },
      {
        "id": 92,
        "name": "Producto 92",
        "description": "Descripción del producto 92, con detalles únicos.",
        "price": 10.6,
        "image_url": "https://example.com/images/producto-92.jpg",
        "category_id": 2
      },
      {
        "id": 93,
        "name": "Producto 93",
        "description": "Descripción del producto 93, con detalles únicos.",
        "price": 10.7,
        "image_url": "https://example.com/images/producto-93.jpg",
        "category_id": 3
      },
      {
        "id": 94,
        "name": "Producto 94",
        "description": "Descripción del producto 94, con detalles únicos.",
        "price": 10.8,
        "image_url": "https://example.com/images/producto-94.jpg",
        "category_id": 4
      },
      {
        "id": 95,
        "name": "Producto 95",
        "description": "Descripción del producto 95, con detalles únicos.",
        "price": 10.9,
        "image_url": "https://example.com/images/producto-95.jpg",
        "category_id": 5
      },
      {
        "id": 96,
        "name": "Producto 96",
        "description": "Descripción del producto 96, con detalles únicos.",
        "price": 11.0,
        "image_url": "https://example.com/images/producto-96.jpg",
        "category_id": 1
      },
      {
        "id": 97,
        "name": "Producto 97",
        "description": "Descripción del producto 97, con detalles únicos.",
        "price": 11.1,
        "image_url": "https://example.com/images/producto-97.jpg",
        "category_id": 2
      },
      {
        "id": 98,
        "name": "Producto 98",
        "description": "Descripción del producto 98, con detalles únicos.",
        "price": 11.2,
        "image_url": "https://example.com/images/producto-98.jpg",
        "category_id": 3
      },
      {
        "id": 99,
        "name": "Producto 99",
        "description": "Descripción del producto 99, con detalles únicos.",
        "price": 11.3,
        "image_url": "https://example.com/images/producto-99.jpg",
        "category_id": 4
      },
      {
        "id": 100,
        "name": "Producto 100",
        "description": "Descripción del producto 100, con detalles únicos.",
        "price": 11.4,
        "image_url": "https://example.com/images/producto-100.jpg",
        "category_id": 5
      }
    ];

    // Atributo para verificar el producto seleccionado
    public productoSeleccionado: number = 0;

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
