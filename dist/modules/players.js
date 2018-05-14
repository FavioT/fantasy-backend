"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NBA = require("nba");
class Players {
    constructor() { }
    create(someone) {
        let info = NBA.findPlayer(someone);
        /*let infoPlayer = {
            firstName: info.firstName,
            lastName: info.lastName,
            playerId: info.playerId,
            teamId: info.teamId,
            fullName: info.fullName
        }
        return infoPlayer;*/
        let jugador = {
            firstName: info.firstName,
            lastName: info.lastName,
            playerId: info.playerId,
            teamId: info.teamId,
            fullName: info.fullName
        };
        return jugador;
    }
    getStats(someone) {
        let player = NBA.stats.playerSplits({ PlayerID: someone.playerId })
            .then(function (res) {
            for (let item in res) {
                if (item === 'overallPlayerDashboard') {
                    console.log(res[item]);
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
}
exports.Players = Players;
