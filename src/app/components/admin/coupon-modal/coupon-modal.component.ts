import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Coupon } from '../../../interfaces/Coupon';

@Component({
  selector: 'app-coupon-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './coupon-modal.component.html',
  styleUrl: './coupon-modal.component.scss'
})
export class CouponModalComponent implements OnChanges{
  @Input() title!: string;
  @Input() coupon: Coupon | null = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  public couponForm: FormGroup;

  constructor() {
    this.couponForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descuento: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
      fecha_inicio: new FormControl('', Validators.required),
      fecha_termino: new FormControl('', Validators.required),
    });
  }

  public ngOnChanges(): void {
    if (this.coupon) {
      this.couponForm.patchValue(this.coupon);
    } else {
      this.couponForm.reset({
        nombre: '',
        descuento: 0,
        fecha_inicio: '',
        fecha_termino: '',
      });
    }
  }

  public saveCoupon(): void {
    if (this.couponForm.invalid) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    this.save.emit({ ...this.coupon, ...this.couponForm.value });
  }

  public cancelModal(): void {
    this.cancel.emit();
  }
}
