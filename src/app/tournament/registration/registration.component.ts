import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public players: String[];
  public message: String;

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
	this.players = ['', '', '','', '', '', '', ''];
	this.message = null;
  }

  /* looks through the players and adds any non-empty player names to the RosterService
  */
  registerContestants() {
	try {
 		for (let player in this.players) {
			if (this.players[player].trim() == '') {
				continue;
			}
			this.rosterService.addContestant(this.players[player]);
		}
		if (this.rosterService.getContestants().length == 2  || this.rosterService.getContestants().length == 4 || this.rosterService.getContestants().length == 8) {
			this.message = this.rosterService.getContestants().toString();
		} else {
			this.message = "Roster can only be 2, 4, or 8 players"
		}
	}
	catch(err) {
		this.message = err;
	}
  }

  /* Presets the name of the first two players to be registered
  */
  autofillTwo() {
    this.players[0] = 'Ash';
    this.players[1] = 'Pikachu';
  }

  /* Presets the name of the first four players to be registered
  */
  autofillFour() {
    this.players[0] = 'Madara'
    this.players[1] = 'Orochimaru'
    this.players[2] = 'Itachi'
    this.players[3] = 'Haku'
  }

  /* Presets the name of the first eight players to be registered
  */
  autofillEight() {
    this.players[0] = 'Naruto';
    this.players[1] = 'Sasuke';
    this.players[2] = 'Sakura';
    this.players[3] = 'Kakashi';
    this.players[4] = 'Jaraiya';
    this.players[5] = 'Tsunade';
    this.players[6] = 'Minato'
    this.players[7] = 'Boruto'
  }

  /* tracks players by index number to deal with primitive array
  */
  trackByPlayerIndex(index: any, item: any) {
	return index;
  }
}
