import { TestBed, inject } from '@angular/core/testing';

import { DeleteJobCodeServiceService } from './delete-job-code-service.service';

describe('DeleteJobCodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteJobCodeServiceService]
    });
  });

  it('should be created', inject([DeleteJobCodeServiceService], (service: DeleteJobCodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
