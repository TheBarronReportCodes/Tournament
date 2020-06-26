export class Match {

public winner: String;

constructor(public firstContestant: String, public secondContestant: String) {
	this.winner = '';
}
  setWinner(winner: String) {
	if (winner == null) {
		throw "winner cannot be null";
	} else if (winner.trim() == '') {
		throw "winner cannot be empty";
	}
	this.winner = winner;
  }

  getWinner() {
	return this.winner;
  }

}
