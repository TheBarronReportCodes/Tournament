import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });
	describe('Constructor', () => {
  		it('should be created', () => {
    			expect(service).toBeTruthy();
  		});
	});

	describe('Duplicate names', () => {
  		it('should not allow duplicate names', () => {
    			expect(function () {
			service.addContestant('Tito');
    			service.addContestant('Tito');
    			}).toThrow('player is duplicate');	
		});

  		it('should not allow duplicate names test 2', () => {
    			expect(function () {
			service.addContestant('Tom');
			service.addContestant('Jennifer');
    			service.addContestant('Tom');
    			}).toThrow('player is duplicate');
  		});
  	});

	describe('Null names', () => {
		it('should not allow null names', () => {
		});
		it('should not allow null names test 2', () => {
		});
	});

	describe('Empty names', () => {
		it('should not allow empty names', () => {
		});
		it('should not allow empty names test 2', () => {
		});
	});
});
