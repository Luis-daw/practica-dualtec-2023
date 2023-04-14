import { TestBed } from '@angular/core/testing';

import { Pagina2Service } from './pagina2.service';

describe('Pagina2Service', () => {
  let service: Pagina2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pagina2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
