import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: String[];

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
	this.players = ['', '', '','', '', '', '', '' ]; 
  }

  /* looks through the players and adds any non-empty player names to the RosterService
  */
  registerContestants() {
	if (rosterService.getContestants().length == 2 || rosterService.getContestants().length == 4 || rosterService.getContestants().length == 8) {
		for (var player in this.players) {
			if (player.trim() == '') {
				continue;
			} 
			rosterService.addContestant(player);
		}
	}
	throw "Rosters can only be 2, 4, or 8 players";
  }

}
