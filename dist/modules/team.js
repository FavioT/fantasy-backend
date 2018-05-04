"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor() {
        this._list = [];
    }
    list() {
        console.dir(this._list);
    }
    addPlayer(player) {
        this._list.push(player);
    }
    statistics() { }
}
exports.Team = Team;
