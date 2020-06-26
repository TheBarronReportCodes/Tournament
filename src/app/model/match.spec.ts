import { Match } from './match';

describe('MatchModel', () => {
	describe('Constructor and Initialization', () => {
  		it('should be truthy', () => {
			var result = new Match('ash','pikachu');
    			expect(result).toBeTruthy();;
  		});

  		it('should return ash as the first contestant', () => {
			var result = new Match('ash','pikachu');
    			expect(result.firstContestant).toEqual('ash');
  		});

  		it('should return pikachu as the second contestant', () => {
			var result = new Match('ash','pikachu');
    			expect(result.secondContestant).toEqual('pikachu');
  		});

  		it('should have empty string as initial winner', () => {
			var result = new Match('ash','pikachu');
    			expect(result.getWinner()).toEqual('');
  		});
	});

	describe('Set Winner', () => {
  		it('should set and return winner as ash', () => {
			var match1 = new Match('ash','gary');
			match1.setWinner(match1.firstContestant);
			var result = match1.getWinner();
    			expect(result).toEqual('ash');
  		});

		it('should set and return winner as gary', () => {
			var match1 = new Match('ash','gary');
			match1.setWinner(match1.secondContestant);
			var result = match1.getWinner();
    			expect(result).toEqual('gary');
  		});
	});
});
