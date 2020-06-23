import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private theContestants: String[];

  constructor() {
	this.theContestants = [];
  }

  /* returns the list of registered contestants' names an
  */
  getContestants(): String[] {
	console.log(this.theContestants);
	return this.theContestants;	
  }

  /* adds a single contestant to the registry
  */
  addContestant(player: String) {
	if (player == null) {
		throw "player is null";
	} else if (player.trim() == '') {
		throw "player is empty";
	}
	for(var contestant in this.theContestants){
		if (this.theContestants[contestant].toLowerCase() == player.toLowerCase()) {
			throw "player is duplicate";
		}
	}
	this.theContestants.push(player);
  }

}
