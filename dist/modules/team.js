"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TEAM_INFO = require('../teams');
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
        function searchTeam(id) {
            for (let item of TEAM_INFO) {
                if (item.teamId === id) {
                    return item.teamName;
                }
            }
        }
        player.teamName = searchTeam(player.teamId);
        this._list.push(player);
    }
    addStat(player) {
        this._stats.push(player);
    }
}
exports.Team = Team;
