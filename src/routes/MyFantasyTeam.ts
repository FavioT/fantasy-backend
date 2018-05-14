import { Router, Request, Response, NextFunction } from 'express';
import * as NBA from 'nba';

// My custom modules
import { Players } from '../modules/players';
import { Team } from '../modules/team';

const FantasyTeam = require('../nba');

export class MyFantasyTeamRouter {
    router: Router;

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
            'Stephen Curry', 
            'James Harden', 
            'Kevin Durant', 
            'Anthony Davis', 
            'Al Horford'
        ];

        players.forEach(function(player) {
            let onePlayer = myPlayer.create(player);
            let oneStats = myPlayer.getStats(onePlayer);
            myTeam.addPlayer(onePlayer);
        });

        res.send(myTeam.list());
        
    }

    /**
    * GET players Statistics.
    */
    public getStats(req: Request, res: Response, next: NextFunction) {

        let myTeam = new Team();
        let myPlayer = new Players();

        let players = [
            202681, 
            201935, 
            201142, 
            203076, 
            203954
        ];

        players.forEach(function(player) {
            let onePlayer = myPlayer.getStats(player);
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
        this.router.get('/stats', this.getStats);
    }

}

// Create MyFantasyTeamRouter, and export its configured Express.Router
const teamRoutes = new MyFantasyTeamRouter();
teamRoutes.init();

export default teamRoutes.router;