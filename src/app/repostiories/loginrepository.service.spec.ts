import { TestBed } from '@angular/core/testing';

import { LoginrepositoryService } from './loginrepository.service';

describe('LoginrepositoryService', () => {
  let service: LoginrepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginrepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
