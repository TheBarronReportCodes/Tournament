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

		it('should set and return winner as gary', () => {
			var match1 = new Match('Lebron','Kevin');
			var match2 = new Match('Dwayne','Damian');

			match1.setWinner(match1.firstContestant);
			match2.setWinner(match2.secondContestant);

			var result1 = match1.getWinner();
			var result2 = match2.getWinner();

    			expect(result1).toEqual('Lebron');
			expect(result2).toEqual('Damian');
  		});

		it('should set and return winner as gary', () => {
			var match1 = new Match('Julio', 'Matt');
			var match2 = new Match('DeAndre','Kyler');
			var match3 = new Match('Will', 'Deshaun');
			var match4 = new Match('Devante','Ryan');

			match1.setWinner(match1.secondContestant);
			match2.setWinner(match2.firstContestant);
			match3.setWinner(match3.secondContestant);
			match4.setWinner(match4.firstContestant);

			var result1 = match1.getWinner();
			var result2 = match2.getWinner();
			var result3 = match3.getWinner();
			var result4 = match4.getWinner();

    			expect(result1).toEqual('Matt');
			expect(result2).toEqual('DeAndre');
			expect(result3).toEqual('Deshaun');
			expect(result4).toEqual('Devante');
  		});
	});

	describe('Null winner', () => {
		it('should not allow null names', () => {
			var match1 = new Match('Julio', 'Matt');
			var result = function () {
				match1.setWinner(null);
			}

			expect(result).toThrow('winner cannot be null');
		});

		it('should not allow null names test 2', () => {
			var match1 = new Match('Julio', 'Matt');
			var match2 = new Match('DeAndre','Kyler');
			var result = function () {
				match1.setWinner(match1.firstContestant);
    				match2.setWinner(null);
			}

			expect(result).toThrow('winner cannot be null');
		});
	});

	describe('Empty winner', () => {
		it('should not allow empty winner', () => {
			var match1 = new Match('Julio', 'Matt');
			var result = function () {
				match1.setWinner('');
			}

			expect(result).toThrow('winner cannot be empty');
		});

		it('should not allow empty names test 2', () => {
			var match1 = new Match('Julio', 'Matt');
			var match2 = new Match('DeAndre','Kyler');
			var result = function () {
				match1.setWinner(match1.firstContestant);
				match2.setWinner('     ');
			}

			expect(result).toThrow('winner cannot be empty');
		});
	});
});
