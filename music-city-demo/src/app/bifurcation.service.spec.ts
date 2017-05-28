import { TestBed, inject } from '@angular/core/testing';

import { BifurcationService } from './bifurcation.service';
import { AppSettingsService } from './app-settings.service';

describe('BifurcationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BifurcationService, AppSettingsService]
    });
  });

  it('should ...', inject([BifurcationService], (service: BifurcationService) => {
    expect(service).toBeTruthy();
  }));
});
