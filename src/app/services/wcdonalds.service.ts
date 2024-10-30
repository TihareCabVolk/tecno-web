import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../models/Products';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class WcdonaldsService {

  private products:Product[] = [
    {
      "id": 1,
      "name": "Producto 1",
      "description": "Descripción del producto 1, con detalles únicos.",
      "price": 15,
      "image_url": "https://example.com/images/producto-1.jpg",
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Producto 2",
      "description": "Descripción del producto 2, con detalles únicos.",
      "price": 16,
      "image_url": "https://img.freepik.com/foto-gratis/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso_90220-1063.jpg?t=st=1729962855~exp=1729966455~hmac=95d264d5f8d7bea74afe57e95ad906032b0f62f85daf8586baaeb99ea6aa3fc5&w=740",
      "category_id": 2
    },
    {
      "id": 3,
      "name": "Producto 3",
      "description": "Descripción del producto 3, con detalles únicos.",
      "price": 17,
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
      "price": 19,
      "image_url": "https://example.com/images/producto-5.jpg",
      "category_id": 5
    },
    {
      "id": 6,
      "name": "Producto 6",
      "description": "Descripción del producto 6, con detalles únicos.",
      "price": 20,
      "image_url": "https://example.com/images/producto-6.jpg",
      "category_id": 1
    },
    {
      "id": 7,
      "name": "Producto 7",
      "description": "Descripción del producto 7, con detalles únicos.",
      "price": 21,
      "image_url": "https://example.com/images/producto-7.jpg",
      "category_id": 2
    },
    {
      "id": 8,
      "name": "Producto 8",
      "description": "Descripción del producto 8, con detalles únicos.",
      "price": 22,
      "image_url": "https://example.com/images/producto-8.jpg",
      "category_id": 3
    },
    {
      "id": 9,
      "name": "Producto 9",
      "description": "Descripción del producto 9, con detalles únicos.",
      "price": 23,
      "image_url": "https://example.com/images/producto-9.jpg",
      "category_id": 4
    },
    {
      "id": 10,
      "name": "Producto 10",
      "description": "Descripción del producto 10, con detalles únicos.",
      "price": 24,
      "image_url": "https://example.com/images/producto-10.jpg",
      "category_id": 5
    },
    {
      "id": 11,
      "name": "Producto 11",
      "description": "Descripción del producto 11, con detalles únicos.",
      "price": 25,
      "image_url": "https://example.com/images/producto-11.jpg",
      "category_id": 1
    },
    {
      "id": 12,
      "name": "Producto 12",
      "description": "Descripción del producto 12, con detalles únicos.",
      "price": 26,
      "image_url": "https://example.com/images/producto-12.jpg",
      "category_id": 2
    },
    {
      "id": 13,
      "name": "Producto 13",
      "description": "Descripción del producto 13, con detalles únicos.",
      "price": 27,
      "image_url": "https://example.com/images/producto-13.jpg",
      "category_id": 3
    },
    {
      "id": 14,
      "name": "Producto 14",
      "description": "Descripción del producto 14, con detalles únicos.",
      "price": 28,
      "image_url": "https://example.com/images/producto-14.jpg",
      "category_id": 4
    },
    {
      "id": 15,
      "name": "Producto 15",
      "description": "Descripción del producto 15, con detalles únicos.",
      "price": 29,
      "image_url": "https://example.com/images/producto-15.jpg",
      "category_id": 5
    },
    {
      "id": 16,
      "name": "Producto 16",
      "description": "Descripción del producto 16, con detalles únicos.",
      "price": 30,
      "image_url": "https://example.com/images/producto-16.jpg",
      "category_id": 1
    },
    {
      "id": 17,
      "name": "Producto 17",
      "description": "Descripción del producto 17, con detalles únicos.",
      "price": 31,
      "image_url": "https://example.com/images/producto-17.jpg",
      "category_id": 2
    },
    {
      "id": 18,
      "name": "Producto 18",
      "description": "Descripción del producto 18, con detalles únicos.",
      "price": 32,
      "image_url": "https://example.com/images/producto-18.jpg",
      "category_id": 3
    },
    {
      "id": 19,
      "name": "Producto 19",
      "description": "Descripción del producto 19, con detalles únicos.",
      "price": 33,
      "image_url": "https://example.com/images/producto-19.jpg",
      "category_id": 4
    },
    {
      "id": 20,
      "name": "Producto 20",
      "description": "Descripción del producto 20, con detalles únicos.",
      "price": 34,
      "image_url": "https://example.com/images/producto-20.jpg",
      "category_id": 5
    },
    {
      "id": 21,
      "name": "Producto 21",
      "description": "Descripción del producto 21, con detalles únicos.",
      "price": 35,
      "image_url": "https://example.com/images/producto-21.jpg",
      "category_id": 1
    },
    {
      "id": 22,
      "name": "Producto 22",
      "description": "Descripción del producto 22, con detalles únicos.",
      "price": 36,
      "image_url": "https://example.com/images/producto-22.jpg",
      "category_id": 2
    },
    {
      "id": 23,
      "name": "Producto 23",
      "description": "Descripción del producto 23, con detalles únicos.",
      "price": 37,
      "image_url": "https://example.com/images/producto-23.jpg",
      "category_id": 3
    },
    {
      "id": 24,
      "name": "Producto 24",
      "description": "Descripción del producto 24, con detalles únicos.",
      "price": 38,
      "image_url": "https://example.com/images/producto-24.jpg",
      "category_id": 4
    },
    {
      "id": 25,
      "name": "Producto 25",
      "description": "Descripción del producto 25, con detalles únicos.",
      "price": 39,
      "image_url": "https://example.com/images/producto-25.jpg",
      "category_id": 5
    },
    {
      "id": 26,
      "name": "Producto 26",
      "description": "Descripción del producto 26, con detalles únicos.",
      "price": 40,
      "image_url": "https://example.com/images/producto-26.jpg",
      "category_id": 1
    },
    {
      "id": 27,
      "name": "Producto 27",
      "description": "Descripción del producto 27, con detalles únicos.",
      "price": 41,
      "image_url": "https://example.com/images/producto-27.jpg",
      "category_id": 2
    },
    {
      "id": 28,
      "name": "Producto 28",
      "description": "Descripción del producto 28, con detalles únicos.",
      "price": 42,
      "image_url": "https://example.com/images/producto-28.jpg",
      "category_id": 3
    },
    {
      "id": 29,
      "name": "Producto 29",
      "description": "Descripción del producto 29, con detalles únicos.",
      "price": 43,
      "image_url": "https://example.com/images/producto-29.jpg",
      "category_id": 4
    },
    {
      "id": 30,
      "name": "Producto 30",
      "description": "Descripción del producto 30, con detalles únicos.",
      "price": 44,
      "image_url": "https://example.com/images/producto-30.jpg",
      "category_id": 5
    },
    {
      "id": 31,
      "name": "Producto 31",
      "description": "Descripción del producto 31, con detalles únicos.",
      "price": 45,
      "image_url": "https://example.com/images/producto-31.jpg",
      "category_id": 1
    },
    {
      "id": 32,
      "name": "Producto 32",
      "description": "Descripción del producto 32, con detalles únicos.",
      "price": 46,
      "image_url": "https://example.com/images/producto-32.jpg",
      "category_id": 2
    },
    {
      "id": 33,
      "name": "Producto 33",
      "description": "Descripción del producto 33, con detalles únicos.",
      "price": 47,
      "image_url": "https://example.com/images/producto-33.jpg",
      "category_id": 3
    },
    {
      "id": 34,
      "name": "Producto 34",
      "description": "Descripción del producto 34, con detalles únicos.",
      "price": 48,
      "image_url": "https://example.com/images/producto-34.jpg",
      "category_id": 4
    },
    {
      "id": 35,
      "name": "Producto 35",
      "description": "Descripción del producto 35, con detalles únicos.",
      "price": 49,
      "image_url": "https://example.com/images/producto-35.jpg",
      "category_id": 5
    },
    {
      "id": 36,
      "name": "Producto 36",
      "description": "Descripción del producto 36, con detalles únicos.",
      "price": 50,
      "image_url": "https://example.com/images/producto-36.jpg",
      "category_id": 1
    },
    {
      "id": 37,
      "name": "Producto 37",
      "description": "Descripción del producto 37, con detalles únicos.",
      "price": 51,
      "image_url": "https://example.com/images/producto-37.jpg",
      "category_id": 2
    },
    {
      "id": 38,
      "name": "Producto 38",
      "description": "Descripción del producto 38, con detalles únicos.",
      "price": 52,
      "image_url": "https://example.com/images/producto-38.jpg",
      "category_id": 3
    },
    {
      "id": 39,
      "name": "Producto 39",
      "description": "Descripción del producto 39, con detalles únicos.",
      "price": 53,
      "image_url": "https://example.com/images/producto-39.jpg",
      "category_id": 4
    },
    {
      "id": 40,
      "name": "Producto 40",
      "description": "Descripción del producto 40, con detalles únicos.",
      "price": 54,
      "image_url": "https://example.com/images/producto-40.jpg",
      "category_id": 5
    },
    {
      "id": 41,
      "name": "Producto 41",
      "description": "Descripción del producto 41, con detalles únicos.",
      "price": 55,
      "image_url": "https://example.com/images/producto-41.jpg",
      "category_id": 1
    },
    {
      "id": 42,
      "name": "Producto 42",
      "description": "Descripción del producto 42, con detalles únicos.",
      "price": 56,
      "image_url": "https://example.com/images/producto-42.jpg",
      "category_id": 2
    },
    {
      "id": 43,
      "name": "Producto 43",
      "description": "Descripción del producto 43, con detalles únicos.",
      "price": 57,
      "image_url": "https://example.com/images/producto-43.jpg",
      "category_id": 3
    },
    {
      "id": 44,
      "name": "Producto 44",
      "description": "Descripción del producto 44, con detalles únicos.",
      "price": 58,
      "image_url": "https://example.com/images/producto-44.jpg",
      "category_id": 4
    },
    {
      "id": 45,
      "name": "Producto 45",
      "description": "Descripción del producto 45, con detalles únicos.",
      "price": 59,
      "image_url": "https://example.com/images/producto-45.jpg",
      "category_id": 5
    },
    {
      "id": 46,
      "name": "Producto 46",
      "description": "Descripción del producto 46, con detalles únicos.",
      "price": 60,
      "image_url": "https://example.com/images/producto-46.jpg",
      "category_id": 1
    },
    {
      "id": 47,
      "name": "Producto 47",
      "description": "Descripción del producto 47, con detalles únicos.",
      "price": 61,
      "image_url": "https://example.com/images/producto-47.jpg",
      "category_id": 2
    },
    {
      "id": 48,
      "name": "Producto 48",
      "description": "Descripción del producto 48, con detalles únicos.",
      "price": 62,
      "image_url": "https://example.com/images/producto-48.jpg",
      "category_id": 3
    },
    {
      "id": 49,
      "name": "Producto 49",
      "description": "Descripción del producto 49, con detalles únicos.",
      "price": 63,
      "image_url": "https://example.com/images/producto-49.jpg",
      "category_id": 4
    },
    {
      "id": 50,
      "name": "Producto 50",
      "description": "Descripción del producto 50, con detalles únicos.",
      "price": 64,
      "image_url": "https://example.com/images/producto-50.jpg",
      "category_id": 5
    },
    {
      "id": 51,
      "name": "Producto 51",
      "description": "Descripción del producto 51, con detalles únicos.",
      "price": 65,
      "image_url": "https://example.com/images/producto-51.jpg",
      "category_id": 1
    },
    {
      "id": 52,
      "name": "Producto 52",
      "description": "Descripción del producto 52, con detalles únicos.",
      "price": 66,
      "image_url": "https://example.com/images/producto-52.jpg",
      "category_id": 2
    },
    {
      "id": 53,
      "name": "Producto 53",
      "description": "Descripción del producto 53, con detalles únicos.",
      "price": 67,
      "image_url": "https://example.com/images/producto-53.jpg",
      "category_id": 3
    },
    {
      "id": 54,
      "name": "Producto 54",
      "description": "Descripción del producto 54, con detalles únicos.",
      "price": 68,
      "image_url": "https://example.com/images/producto-54.jpg",
      "category_id": 4
    },
    {
      "id": 55,
      "name": "Producto 55",
      "description": "Descripción del producto 55, con detalles únicos.",
      "price": 69,
      "image_url": "https://example.com/images/producto-55.jpg",
      "category_id": 5
    },
    {
      "id": 56,
      "name": "Producto 56",
      "description": "Descripción del producto 56, con detalles únicos.",
      "price": 70,
      "image_url": "https://example.com/images/producto-56.jpg",
      "category_id": 1
    },
    {
      "id": 57,
      "name": "Producto 57",
      "description": "Descripción del producto 57, con detalles únicos.",
      "price": 71,
      "image_url": "https://example.com/images/producto-57.jpg",
      "category_id": 2
    },
    {
      "id": 58,
      "name": "Producto 58",
      "description": "Descripción del producto 58, con detalles únicos.",
      "price": 72,
      "image_url": "https://example.com/images/producto-58.jpg",
      "category_id": 3
    },
    {
      "id": 59,
      "name": "Producto 59",
      "description": "Descripción del producto 59, con detalles únicos.",
      "price": 73,
      "image_url": "https://example.com/images/producto-59.jpg",
      "category_id": 4
    },
    {
      "id": 60,
      "name": "Producto 60",
      "description": "Descripción del producto 60, con detalles únicos.",
      "price": 74,
      "image_url": "https://example.com/images/producto-60.jpg",
      "category_id": 5
    },
    {
      "id": 61,
      "name": "Producto 61",
      "description": "Descripción del producto 61, con detalles únicos.",
      "price": 75,
      "image_url": "https://example.com/images/producto-61.jpg",
      "category_id": 1
    },
    {
      "id": 62,
      "name": "Producto 62",
      "description": "Descripción del producto 62, con detalles únicos.",
      "price": 76,
      "image_url": "https://example.com/images/producto-62.jpg",
      "category_id": 2
    },
    {
      "id": 63,
      "name": "Producto 63",
      "description": "Descripción del producto 63, con detalles únicos.",
      "price": 77,
      "image_url": "https://example.com/images/producto-63.jpg",
      "category_id": 3
    },
    {
      "id": 64,
      "name": "Producto 64",
      "description": "Descripción del producto 64, con detalles únicos.",
      "price": 78,
      "image_url": "https://example.com/images/producto-64.jpg",
      "category_id": 4
    },
    {
      "id": 65,
      "name": "Producto 65",
      "description": "Descripción del producto 65, con detalles únicos.",
      "price": 79,
      "image_url": "https://example.com/images/producto-65.jpg",
      "category_id": 5
    },
    {
      "id": 66,
      "name": "Producto 66",
      "description": "Descripción del producto 66, con detalles únicos.",
      "price": 80,
      "image_url": "https://example.com/images/producto-66.jpg",
      "category_id": 1
    },
    {
      "id": 67,
      "name": "Producto 67",
      "description": "Descripción del producto 67, con detalles únicos.",
      "price": 81,
      "image_url": "https://example.com/images/producto-67.jpg",
      "category_id": 2
    },
    {
      "id": 68,
      "name": "Producto 68",
      "description": "Descripción del producto 68, con detalles únicos.",
      "price": 82,
      "image_url": "https://example.com/images/producto-68.jpg",
      "category_id": 3
    },
    {
      "id": 69,
      "name": "Producto 69",
      "description": "Descripción del producto 69, con detalles únicos.",
      "price": 83,
      "image_url": "https://example.com/images/producto-69.jpg",
      "category_id": 4
    },
    {
      "id": 70,
      "name": "Producto 70",
      "description": "Descripción del producto 70, con detalles únicos.",
      "price": 84,
      "image_url": "https://example.com/images/producto-70.jpg",
      "category_id": 5
    },
    {
      "id": 71,
      "name": "Producto 71",
      "description": "Descripción del producto 71, con detalles únicos.",
      "price": 85,
      "image_url": "https://example.com/images/producto-71.jpg",
      "category_id": 1
    },
    {
      "id": 72,
      "name": "Producto 72",
      "description": "Descripción del producto 72, con detalles únicos.",
      "price": 86,
      "image_url": "https://example.com/images/producto-72.jpg",
      "category_id": 2
    },
    {
      "id": 73,
      "name": "Producto 73",
      "description": "Descripción del producto 73, con detalles únicos.",
      "price": 87,
      "image_url": "https://example.com/images/producto-73.jpg",
      "category_id": 3
    },
    {
      "id": 74,
      "name": "Producto 74",
      "description": "Descripción del producto 74, con detalles únicos.",
      "price": 88,
      "image_url": "https://example.com/images/producto-74.jpg",
      "category_id": 4
    },
    {
      "id": 75,
      "name": "Producto 75",
      "description": "Descripción del producto 75, con detalles únicos.",
      "price": 89,
      "image_url": "https://example.com/images/producto-75.jpg",
      "category_id": 5
    },
    {
      "id": 76,
      "name": "Producto 76",
      "description": "Descripción del producto 76, con detalles únicos.",
      "price": 90,
      "image_url": "https://example.com/images/producto-76.jpg",
      "category_id": 1
    },
    {
      "id": 77,
      "name": "Producto 77",
      "description": "Descripción del producto 77, con detalles únicos.",
      "price": 91,
      "image_url": "https://example.com/images/producto-77.jpg",
      "category_id": 2
    },
    {
      "id": 78,
      "name": "Producto 78",
      "description": "Descripción del producto 78, con detalles únicos.",
      "price": 92,
      "image_url": "https://example.com/images/producto-78.jpg",
      "category_id": 3
    },
    {
      "id": 79,
      "name": "Producto 79",
      "description": "Descripción del producto 79, con detalles únicos.",
      "price": 93,
      "image_url": "https://example.com/images/producto-79.jpg",
      "category_id": 4
    },
    {
      "id": 80,
      "name": "Producto 80",
      "description": "Descripción del producto 80, con detalles únicos.",
      "price": 94,
      "image_url": "https://example.com/images/producto-80.jpg",
      "category_id": 5
    },
    {
      "id": 81,
      "name": "Producto 81",
      "description": "Descripción del producto 81, con detalles únicos.",
      "price": 95,
      "image_url": "https://example.com/images/producto-81.jpg",
      "category_id": 1
    },
    {
      "id": 82,
      "name": "Producto 82",
      "description": "Descripción del producto 82, con detalles únicos.",
      "price": 96,
      "image_url": "https://example.com/images/producto-82.jpg",
      "category_id": 2
    },
    {
      "id": 83,
      "name": "Producto 83",
      "description": "Descripción del producto 83, con detalles únicos.",
      "price": 97,
      "image_url": "https://example.com/images/producto-83.jpg",
      "category_id": 3
    },
    {
      "id": 84,
      "name": "Producto 84",
      "description": "Descripción del producto 84, con detalles únicos.",
      "price": 98,
      "image_url": "https://example.com/images/producto-84.jpg",
      "category_id": 4
    },
    {
      "id": 85,
      "name": "Producto 85",
      "description": "Descripción del producto 85, con detalles únicos.",
      "price": 99,
      "image_url": "https://example.com/images/producto-85.jpg",
      "category_id": 5
    },
    {
      "id": 86,
      "name": "Producto 86",
      "description": "Descripción del producto 86, con detalles únicos.",
      "price": 100,
      "image_url": "https://example.com/images/producto-86.jpg",
      "category_id": 1
    },
    {
      "id": 87,
      "name": "Producto 87",
      "description": "Descripción del producto 87, con detalles únicos.",
      "price": 101,
      "image_url": "https://example.com/images/producto-87.jpg",
      "category_id": 2
    },
    {
      "id": 88,
      "name": "Producto 88",
      "description": "Descripción del producto 88, con detalles únicos.",
      "price": 102,
      "image_url": "https://example.com/images/producto-88.jpg",
      "category_id": 3
    },
    {
      "id": 89,
      "name": "Producto 89",
      "description": "Descripción del producto 89, con detalles únicos.",
      "price": 103,
      "image_url": "https://example.com/images/producto-89.jpg",
      "category_id": 4
    },
    {
      "id": 90,
      "name": "Producto 90",
      "description": "Descripción del producto 90, con detalles únicos.",
      "price": 104,
      "image_url": "https://example.com/images/producto-90.jpg",
      "category_id": 5
    },
    {
      "id": 91,
      "name": "Producto 91",
      "description": "Descripción del producto 91, con detalles únicos.",
      "price": 105,
      "image_url": "https://example.com/images/producto-91.jpg",
      "category_id": 1
    },
    {
      "id": 92,
      "name": "Producto 92",
      "description": "Descripción del producto 92, con detalles únicos.",
      "price": 106,
      "image_url": "https://example.com/images/producto-92.jpg",
      "category_id": 2
    },
    {
      "id": 93,
      "name": "Producto 93",
      "description": "Descripción del producto 93, con detalles únicos.",
      "price": 107,
      "image_url": "https://example.com/images/producto-93.jpg",
      "category_id": 3
    },
    {
      "id": 94,
      "name": "Producto 94",
      "description": "Descripción del producto 94, con detalles únicos.",
      "price": 108,
      "image_url": "https://example.com/images/producto-94.jpg",
      "category_id": 4
    },
    {
      "id": 95,
      "name": "Producto 95",
      "description": "Descripción del producto 95, con detalles únicos.",
      "price": 109,
      "image_url": "https://example.com/images/producto-95.jpg",
      "category_id": 5
    },
    {
      "id": 96,
      "name": "Producto 96",
      "description": "Descripción del producto 96, con detalles únicos.",
      "price": 110,
      "image_url": "https://example.com/images/producto-96.jpg",
      "category_id": 1
    },
    {
      "id": 97,
      "name": "Producto 97",
      "description": "Descripción del producto 97, con detalles únicos.",
      "price": 111,
      "image_url": "https://example.com/images/producto-97.jpg",
      "category_id": 2
    },
    {
      "id": 98,
      "name": "Producto 98",
      "description": "Descripción del producto 98, con detalles únicos.",
      "price": 112,
      "image_url": "https://example.com/images/producto-98.jpg",
      "category_id": 3
    },
    {
      "id": 99,
      "name": "Producto 99",
      "description": "Descripción del producto 99, con detalles únicos.",
      "price": 113,
      "image_url": "https://example.com/images/producto-99.jpg",
      "category_id": 4
    },
    {
      "id": 100,
      "name": "Producto 100",
      "description": "Descripción del producto 100, con detalles únicos.",
      "price": 114,
      "image_url": "https://example.com/images/producto-100.jpg",
      "category_id": 5
    }
  ];
  private categories:Category[] = [
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
