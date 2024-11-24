import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../../interfaces/Category';
import { Products } from '../../../interfaces/Products';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  @Input() title!: string;
  @Input() categories: Category[] = [];
  @Input() product: Products | null = null;
  @Output() save = new EventEmitter<Products>();
  @Output() cancel = new EventEmitter<void>();

  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      img_url: new FormControl('', Validators.required),
    });
  }

  ngOnChanges(): void {
    if (this.product) {
      this.productForm.patchValue(this.product);
    } else {
      this.productForm.reset({
        name: '',
        category_id: '',
        price: 0,
        description: '',
        img_url: '',
      });
    }
  }

  saveProduct(): void {
    if (this.productForm.invalid) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    this.save.emit({ ...this.product, ...this.productForm.value });
  }

  cancelModal(): void {
    this.cancel.emit();
  }
}
