import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: String[]; 
  public message;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
	this.players = ['', '', '','', '', '', '', '' ]; 
	this.message = null;
  }

  /* looks through the players and adds any non-empty player names to the RosterService
  */
  registerContestants() {
	for (var player in this.players) {
		if (player.trim() == '') {
			continue;
		} 
		this.rosterService.addContestant(player);
	}

	if (this.rosterService.getContestants().length == 2  || this.rosterService.getContestants().length == 4 || this.rosterService.getContestants().length == 8) {
		this.message = this.rosterService.getContestants().toString();
	} else {
		this.message = "Roster can only be 2, 4, or 8 players"
	}
  }

}
