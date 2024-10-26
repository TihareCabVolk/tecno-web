import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrritoCompraComponent } from './carrrito-compra.component';

describe('CarrritoCompraComponent', () => {
  let component: CarrritoCompraComponent;
  let fixture: ComponentFixture<CarrritoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrritoCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrritoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
