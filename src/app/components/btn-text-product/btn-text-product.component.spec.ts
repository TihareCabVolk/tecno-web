import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTextProductComponent } from './btn-text-product.component';

describe('BtnTextProductComponent', () => {
  let component: BtnTextProductComponent;
  let fixture: ComponentFixture<BtnTextProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTextProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTextProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
