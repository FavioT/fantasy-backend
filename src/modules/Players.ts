import * as NBA from 'nba';

export class Player {
  constructor(public firstName: string, public lastName: string, public playerId: number, public teamId: number, public fullName: string) {};
}

export class Players {

  static create( someone: string) {
      let info = NBA.findPlayer(someone);
      return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
  }

}