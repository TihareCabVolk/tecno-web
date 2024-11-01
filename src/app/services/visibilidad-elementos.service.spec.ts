import { TestBed } from '@angular/core/testing';

import { VisibilidadElementosService } from './visibilidad-elementos.service';

describe('VisibilidadElementosService', () => {
  let service: VisibilidadElementosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadElementosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
