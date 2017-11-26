import { TestBed, inject } from '@angular/core/testing';

import { OpenweathermapService } from './openweathermap.service';

describe('OpenweathermapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenweathermapService]
    });
  });

  it('should be created', inject([OpenweathermapService], (service: OpenweathermapService) => {
    expect(service).toBeTruthy();
  }));
});
