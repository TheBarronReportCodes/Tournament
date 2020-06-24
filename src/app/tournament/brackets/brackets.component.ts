import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {

  constructor(private rosterService: RosterService) { }

  ngOnInit(): void {
  }

  showContestants() {
	this.rosterService.getContestants.toString();
  }

}
