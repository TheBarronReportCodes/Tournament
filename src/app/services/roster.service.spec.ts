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

	describe('Several contestants added (No Errors)', () => {
		it('should add two contestant', () => {	
			service.addContestant('Ash');
			service.addContestant('Pikachu');
			var result = service.getContestants();

			expect(result).toEqual(['Ash', 'Pikachu']);
		});

		it('should add four contestants', () => {
			service.addContestant('Kim Possible');
			service.addContestant('Ron Stoppable');
			service.addContestant('Lilo');
			service.addContestant('Stitch');
			var result = service.getContestants();

			expect(result).toEqual(['Kim Possible', 'Ron Stoppable', 'Lilo', 'Stitch']);
		});

		it('should add eight contestants', () => {
			service.addContestant('Marquis De Carabas');
			service.addContestant('Door');
			service.addContestant('Richard Mayhew');
			service.addContestant('Jessica');
			service.addContestant('Hunter');
			service.addContestant('Mr. Vandemar');
			service.addContestant('Mr. Croup');
			service.addContestant('Islington');
			var result = service.getContestants();

			expect(result).toEqual(['Marquis De Carabas', 'Door', 'Richard Mayhew', 'Jessica', 'Hunter', 'Mr. Vandemar', 'Mr. Croup', 'Islington']);
		});

	});
});
