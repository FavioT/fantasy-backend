import { Players } from './players';

export class Team {
  _list: any[] = [];

  list(): void {
    console.dir(this._list);
  }

  addPlayer( player: any ) {
    this._list.push(player);
  }

  statistics( ) {}
}