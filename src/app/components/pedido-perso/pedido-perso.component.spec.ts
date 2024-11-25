import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPersoComponent } from './pedido-perso.component';

describe('PedidoPersoComponent', () => {
  let component: PedidoPersoComponent;
  let fixture: ComponentFixture<PedidoPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoPersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
