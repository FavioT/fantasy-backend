"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor() {
        this._list = [];
        this._stats = [];
    }
    list() {
        console.dir(this._list);
    }
    showStats() {
        console.dir(this._stats);
    }
    addPlayer(player) {
        this._list.push(player);
    }
    addStat(player) {
        this._stats.push(player);
    }
}
exports.Team = Team;
