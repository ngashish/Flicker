import { TestBed } from '@angular/core/testing';

import { GetimagesService } from './getimages.service';

describe('GetimagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetimagesService = TestBed.get(GetimagesService);
    expect(service).toBeTruthy();
  });
});
