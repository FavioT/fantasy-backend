"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NBA = require("nba");
class Player {
    constructor(firstName, lastName, playerId, teamId, fullName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.playerId = playerId;
        this.teamId = teamId;
        this.fullName = fullName;
    }
    ;
}
exports.Player = Player;
class Players {
    constructor() { }
    create(someone) {
        let info = NBA.findPlayer(someone);
        return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
    }
    static create(someone) {
        let info = NBA.findPlayer(someone);
        return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
    }
    static getStats(someone) {
        let statistics;
        let player = NBA.stats.playerSplits({ PlayerID: someone.playerId })
            .then(function (res) {
            statistics = res.monthPlayerDashboard;
            console.dir(statistics);
        }, function (err) {
            console.log(err);
        });
    }
}
exports.Players = Players;
