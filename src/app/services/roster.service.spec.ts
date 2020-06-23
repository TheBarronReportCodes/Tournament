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
			var result = function () {
				service.addContestant('Tito');
    				service.addContestant('Tito');
    			}

    			expect(result).toThrow('player is duplicate');	
		});

  		it('should not allow duplicate names test 2', () => {
			var result = function () {
				service.addContestant('Tom');
				service.addContestant('Jennifer');
    				service.addContestant('tom');
    			}

    			expect(result).toThrow('player is duplicate');
  		});
  	});

	describe('Null names', () => {
		it('should not allow null names', () => {
			var result = function () {
				service.addContestant(null);
			}

			expect(result).toThrow('player is null');
		});

		it('should not allow null names test 2', () => {
			var result = function () {
				service.addContestant('Tom');
				service.addContestant('Jennifer');
    				service.addContestant(null);
			}

			expect(result).toThrow('player is null');
		});
	});

	describe('Empty names', () => {
		it('should not allow empty names', () => {
			var result = function () {
				service.addContestant('');
			}

			expect(result).toThrow('player is empty');
		});

		it('should not allow empty names test 2', () => {
			var result = function () {
				service.addContestant('     ');
			}

			expect(result).toThrow('player is empty');
		});
	});

	describe('One contestant added (No Errors)', () => {
		it('should add one contestant', () => {	
			service.addContestant('Onitsuka');
			var result = service.getContestants();

			expect(result).toEqual(['Onitsuka']);
		});

		it('should add one contestant test two', () => {
			service.addContestant('Nujabes');
			var result = service.getContestants();

			expect(result).toEqual(['Nujabes']);
		});
	});
});
