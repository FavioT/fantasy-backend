import * as NBA from 'nba';

// NBA.stats.playerSplits(steph)
// 	.then(
// 		function (response) {
// 			console.log(response.monthPlayerDashboard);
// 		})
// 		function (error) {
// 	.catch(
// 			console.log(error);
// 		});


class Player {
  constructor(public firstName: string, public lastName: string, public playerId: number, public teamId: number, public fullName: string) {};
}

class Players {

  static create( someone: string) {
      let info = NBA.findPlayer(someone);
      return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
  }

}

class Team {
  _list: any[] = [];

  list(): void {
    console.dir(this._list);
  }

  addPlayer( player: Player ) {
    this._list.push(player);
  }

  statistics( ) {}
}

let myTeam = new Team();
let players = ['Stephen Curry', 'James Harden', 'Kevin Durant', 'Anthony Davis', 'LaMarcus Aldridge'];

players.forEach(function(player) {
  let onePlayer = Players.create(player);
  myTeam.addPlayer(onePlayer);
});

myTeam.list();
