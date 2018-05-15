import { Players } from './players';
import { Player, PlayerStats } from '../interfaces/types';

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
    this._list.push(player);
  }

  addStat( player: any ) {
  	this._stats.push(player);
  }
}