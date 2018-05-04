import { Router, Request, Response, NextFunction } from 'express';
import * as NBA from 'nba';

// My custom modules
import { Players } from '../modules/players';
import { Team } from '../modules/team';

const FantasyTeam = require('../nba');

export class MyFantasyTeamRouter {
    router: Router;
    myTeam: any;    

    /**
    * Initialize MyFantasyTeamRouter
    */
    constructor() {
        this.router = Router();
        this.init();        
    }

    /**
    * GET all Players
    */
    public getAll(req: Request, res: Response, next: NextFunction) {

        let myTeam = new Team();
        let myPlayer = new Players();

        let players = [
            'Kyrie Irving', 
            'James Harden', 
            'Kevin Durant', 
            'Anthony Davis', 
            'Joel Embiid'
        ];        

        players.forEach(function(player) {
            //myPlayer.create(player);
            let onePlayer = Players.create(player);
            //let oneStats = Players.getStats(onePlayer);
            myTeam.addPlayer(onePlayer);
        });

        res.send(myTeam.list());
        
    }

    /**
    * GET one player by playerId
    */
    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let player = FantasyTeam.find(player => player.playerId === query);
        if (player) {
            res.status(200)
            .send({
                message: 'Success',
                status: res.status,
                player
            });
        } else {
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

// Create MyFantasyTeamRouter, and export its configured Express.Router
const teamRoutes = new MyFantasyTeamRouter();
teamRoutes.init();

export default teamRoutes.router;