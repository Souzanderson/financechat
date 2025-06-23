import { TestBed } from '@angular/core/testing';

import { ChatrepositoryService } from './chatrepository.service';

describe('ChatrepositoryService', () => {
  let service: ChatrepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatrepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
