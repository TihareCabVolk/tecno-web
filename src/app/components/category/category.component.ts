import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/category';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() public categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<number>();

  // Método que se llama cuando se selecciona una categoría
  selectCategory(id: number) {
    console.log('ID de categoría en HijoComponent:', id);
    this.categorySelected.emit(id); // Emitimos el ID al padre
  }
}
