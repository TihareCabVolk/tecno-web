import { Component } from '@angular/core';
import { WcdonaldsService } from '../../../services/wcdonalds.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CouponModalComponent } from "../coupon-modal/coupon-modal.component";
import { Coupon } from '../../../interfaces/Coupon';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CouponModalComponent],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {

  public coupons: Coupon[] = [];
  public filteredCoupons!:Coupon[]

  public filterForm!: FormGroup;

  private destroy$ = new Subject<void>();
  
  public showModal = false;
  public selectedCoupon: Coupon | null = null;
  public modalTitle = '';


  constructor(private wdService: WcdonaldsService) {
    // Formulario de filtros
    this.filterForm = new FormGroup({
      searchTerm: new FormControl(''),
    });

    // Detectar cambios en filtros
    this.filterForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.applyFilters();
    });
  };

  public ngOnInit(): void {
    this.getCoupon();
  };

  //Obtener cupones
  private getCoupon(): void {
    this.wdService.getAllCupones().subscribe({
      next: (data: Coupon[]) => {
        this.coupons = data;
        this.applyFilters();
        
      },
      error: (err) => {
        console.error('Error al obtener los cupones:', err.message);
      },
    })
  };

  private applyFilters(): void {
    const searchTerm = this.filterForm.get('searchTerm')?.value.toLowerCase() || '';
  
    this.filteredCoupons = this.coupons.filter((coupon) => {
      const matchesSearchTerm =
        coupon.nombre.toLowerCase().includes(searchTerm);
      return matchesSearchTerm;
    })
  };
  
  public toggleAddCoupon(): void {
    this.modalTitle = 'Agregar Producto';
    this.selectedCoupon = null;
    this.showModal = true;
  };

  public toggleEditCoupon(coupon: Coupon): void {
    this.modalTitle = 'Editar Producto';
    this.selectedCoupon = coupon;
    this.showModal = true;
  };


  public handleSave(coupon: Coupon): void {
    if (this.selectedCoupon) {
      // Editar producto
      this.wdService.updateCupon(coupon).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.getCoupon();
          this.applyFilters();
        },
      );
    } else {
      // Generación del código aleatorio de 15 caracteres
      const caracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let codigo = '';
      for (let i = 0; i < 15; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(aleatorio);
      }
      coupon.codigo = codigo;
      
      this.wdService.addCupon(
        coupon.codigo,
        coupon.nombre,
        coupon.descuento,
        coupon.fecha_inicio,
        coupon.fecha_termino
      ).subscribe(() => {
        this.getCoupon();
        this.applyFilters();
      });
    }
    this.showModal = false;
  };

  public handleCancel(): void {
    this.showModal = false;
  };

  public deleteCupon(codigo: string): void {
    this.wdService.deleteCupon(codigo).subscribe({
      next: () => {
        this.getCoupon();
        this.applyFilters();
      },
      error: (err) => {
        console.error('Error al eliminar el cupon:', err);
      },
    });
  };
}
