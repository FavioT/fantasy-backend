"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NBA = require("nba");
class Players {
    constructor() { }
    create(someone) {
        let info = NBA.findPlayer(someone);
        let basicInfo = {
            firstName: info.firstName,
            lastName: info.lastName,
            playerId: info.playerId,
            teamId: info.teamId,
            fullName: info.fullName
        };
        return basicInfo;
    }
    getStats(someone) {
        let player = NBA.stats.playerSplits({ PlayerID: someone })
            .then(function (res) {
            for (let item in res) {
                if (item === 'overallPlayerDashboard') {
                    console.log(res[item]);
                    return res[item];
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
}
exports.Players = Players;
