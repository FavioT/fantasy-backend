"use strict";
exports.__esModule = true;
var NBA = require("nba");
// NBA.stats.playerSplits(steph)
// 	.then(
// 		function (response) {
// 			console.log(response.monthPlayerDashboard);
// 		})
// 		function (error) {
// 	.catch(
// 			console.log(error);
// 		});
var Player = /** @class */ (function () {
    function Player(firstName, lastName, playerId, teamId, fullName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.playerId = playerId;
        this.teamId = teamId;
        this.fullName = fullName;
    }
    ;
    return Player;
}());
var Players = /** @class */ (function () {
    function Players() {
    }
    Players.create = function (someone) {
        var info = NBA.findPlayer(someone);
        return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
    };
    return Players;
}());
var Team = /** @class */ (function () {
    function Team() {
        this._list = [];
    }
    Team.prototype.list = function () {
        console.dir(this._list);
    };
    Team.prototype.addPlayer = function (player) {
        this._list.push(player);
    };
    Team.prototype.statistics = function () { };
    return Team;
}());
var myTeam = new Team();
var players = ['Stephen Curry', 'James Harden', 'Kevin Durant', 'Anthony Davis', 'LaMarcus Aldridge'];
players.forEach(function (player) {
    var onePlayer = Players.create(player);
    myTeam.addPlayer(onePlayer);
});
myTeam.list();
