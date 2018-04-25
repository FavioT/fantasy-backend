"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FantasyTeam = require('../nba');
class MyFantasyTeamRouter {
    /**
     * Initialize MyFantasyTeamRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Players
     */
    getAll(req, res, next) {
        res.send(FantasyTeam);
    }
    /**
    * GET one player by playerId
    */
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let player = FantasyTeam.find(player => player.playerId === query);
        if (player) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                player
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No player found with the given id.',
                status: res.status
            });
        }
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.MyFantasyTeamRouter = MyFantasyTeamRouter;
// Create MyFantasyTeamRouter, and export its configured Express.Router
const teamRoutes = new MyFantasyTeamRouter();
teamRoutes.init();
exports.default = teamRoutes.router;
