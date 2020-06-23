import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow duplicate names', () => {
    expect(function () {
	service.addContestant('Tito');
    	service.addContestant('Tito');
    }).toThrow('player is duplicate');
  });

  

});
