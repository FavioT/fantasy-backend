import { Router, Request, Response, NextFunction } from 'express';
import * as NBA from 'nba';
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
        class Player {
            constructor(public firstName: string, public lastName: string, public playerId: number, public teamId: number, public fullName: string) {};
        }

        class Players {
            static create( someone: string) {
                let info = NBA.findPlayer(someone);
                return new Player(info.firstName, info.lastName, info.playerId, info.teamId, info.fullName);
            }
        }

        class Team {
            _list: any[] = [];

            list(): any {
                console.dir(this._list);
                return this._list;
            }

            addPlayer( player: Player ) {
                this._list.push(player);
            }

            statistics( ) {}
        }

        let myTeam = new Team();
        let players = [
            'Kyrie Irving', 
            'James Harden', 
            'Kevin Durant', 
            'Anthony Davis', 
            'Joel Embiid'
        ];

        players.forEach(function(player) {
            let onePlayer = Players.create(player);
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