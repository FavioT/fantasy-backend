import { Players } from './players';
import { Player, PlayerStats } from '../interfaces/types';

const TEAM_INFO = require('../teams');

export class Team {
  _list: any[] = [];
  _stats: any[] = [];


  list(): void {
    console.dir(this._list);
  }

  showStats(): void {
  	console.dir(this._stats);
  }

  addPlayer( player: Player ) {
    
    function searchTeam (id) {
      for (let item of TEAM_INFO) {
        if (item.teamId === id) {
          return item.teamName;
        }
      }   
    }

    player.teamName = searchTeam(player.teamId);
    this._list.push(player);
  }

  addStat( player: any ) {
  	this._stats.push(player);
  }
}