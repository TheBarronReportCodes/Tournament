export class Match {

public winner: String;

constructor(public firstContestant: String, public secondContestant: String) {
	this.winner = '';
}
  setWinner(winner: String) {
	this.winner = winner;
  }

  getWinner() {
	return this.winner;
  }

}
