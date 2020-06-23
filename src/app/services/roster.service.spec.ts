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
    				service.addContestant('tom');
    			}).toThrow('player is duplicate');
  		});
  	});

	describe('Null names', () => {
		it('should not allow null names', () => {
			expect(function () {
				service.addContestant(null);
			}).toThrow('player is null');
		});
		it('should not allow null names test 2', () => {
			expect(function () {
				service.addContestant('Tom');
				service.addContestant('Jennifer');
    				service.addContestant(null);
			}).toThrow('player is null');
		});
	});

	describe('Empty names', () => {
		it('should not allow empty names', () => {
			expect(function () {
				service.addContestant('');
			}).toThrow('player is empty');
		});
		it('should not allow empty names test 2', () => {
			expect(function () {
				service.addContestant('     ');
			}).toThrow('player is empty');
		});
	});

	describe('One contestant added (No Errors)', () => {
		it('should add one contestant', () => {
			service.addContestant('Onitsuka');
			expect(function () {
				service.getContestants();
			}).toEqual('Onitsuka');
		});
		it('should add one contestant test two', () => {
			expect(function () {
				service.addContestant('Nujabes');
				service.getContestants();
			}).toEqual('Nujabes');
		});
	});
});
