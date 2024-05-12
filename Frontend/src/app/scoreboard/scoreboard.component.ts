import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  // Properties for match summary
  runs: number = 0;
  overs: string = '0.0';
  wickets: number = 0;

  // Properties for batsmen, bowlers, and points table
  batsmen: any[] = [];
  bowlers: any[] = [];
  pointsTable: any[] = [];

  // Properties for adding new player, new bowler, and new team
  newPlayer: any = {};
  newBowler: any = {};
  newTeam: any = { name: '', wins: 0, losses: 0, points: 0 };

  // Methods to add a new player, new bowler, and new team
  addPlayer() {
    this.batsmen.push(this.newPlayer);
    this.newPlayer = {};
  }

  addBowler() {
    this.bowlers.push(this.newBowler);
    this.newBowler = {};
  }

  addTeam() {
    this.pointsTable.push(this.newTeam);
    this.newTeam = { name: '', wins: 0, losses: 0, points: 0 };
  }
}
