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

  registerContestants() {
  }

}
