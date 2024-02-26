import { TestBed } from '@angular/core/testing';

import { DrawImgService } from './draw-img.service';

describe('DrawImgService', () => {
  let service: DrawImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
