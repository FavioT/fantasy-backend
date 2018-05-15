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
            //let oneStats = myPlayer.getStats(onePlayer);
            myTeam.addPlayer(onePlayer);
        });

        res.send(myTeam._list); 
        
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

        let mockupStats = [ 
            { 
                groupSet: 'Overall',
                groupValue: '2017-18',
                gp: 75,
                w: 45,
                l: 30,
                wPct: 0.6,
                min: 36.4,
                fgm: 10.4,
                fga: 19.5,
                fgPct: 0.534,
                fG3M: 0.7,
                fG3A: 2.2,
                fg3Pct: 0.34,
                ftm: 6.6,
                fta: 8,
                ftPct: 0.828,
                oreb: 2.5,
                dreb: 8.6,
                reb: 11.1,
                ast: 2.3,
                tov: 2.2,
                stl: 1.5,
                blk: 2.6,
                blka: 0.6,
                pf: 2.1,
                pfd: 7.4,
                pts: 28.1,
                plusMinus: 3.9,
                nbaFantasyPts: 55.1,
                dD2: 50,
                tD3: 1,
                gpRank: 1,
                wRank: 1,
                lRank: 1,
                wPctRank: 1,
                minRank: 1,
                fgmRank: 1,
                fgaRank: 1,
                fgPctRank: 1,
                fg3mRank: 1,
                fg3aRank: 1,
                fg3PctRank: 1,
                ftmRank: 1,
                ftaRank: 1,
                ftPctRank: 1,
                orebRank: 1,
                drebRank: 1,
                rebRank: 1,
                astRank: 1,
                tovRank: 1,
                stlRank: 1,
                blkRank: 1,
                blkaRank: 1,
                pfRank: 1,
                pfdRank: 1,
                ptsRank: 1,
                plusMinusRank: 1,
                nbaFantasyPtsRank: 1,
                dd2Rank: 1,
                td3Rank: 1,
                cfid: 33,
                cfparams: '2017-18' 
            },
            { 
                groupSet: 'Overall',
                groupValue: '2017-18',
                gp: 60,
                w: 41,
                l: 19,
                wPct: 0.683,
                min: 32.2,
                fgm: 8.9,
                fga: 18.1,
                fgPct: 0.491,
                fG3M: 2.8,
                fG3A: 6.8,
                fg3Pct: 0.408,
                ftm: 3.9,
                fta: 4.4,
                ftPct: 0.889,
                oreb: 0.6,
                dreb: 3.2,
                reb: 3.8,
                ast: 5.1,
                tov: 2.3,
                stl: 1.1,
                blk: 0.3,
                blka: 0.8,
                pf: 2,
                pfd: 3.4,
                pts: 24.4,
                plusMinus: 4.3,
                nbaFantasyPts: 38.4,
                dD2: 1,
                tD3: 0,
                gpRank: 1,
                wRank: 1,
                lRank: 1,
                wPctRank: 1,
                minRank: 1,
                fgmRank: 1,
                fgaRank: 1,
                fgPctRank: 1,
                fg3mRank: 1,
                fg3aRank: 1,
                fg3PctRank: 1,
                ftmRank: 1,
                ftaRank: 1,
                ftPctRank: 1,
                orebRank: 1,
                drebRank: 1,
                rebRank: 1,
                astRank: 1,
                tovRank: 1,
                stlRank: 1,
                blkRank: 1,
                blkaRank: 1,
                pfRank: 1,
                pfdRank: 1,
                ptsRank: 1,
                plusMinusRank: 1,
                nbaFantasyPtsRank: 1,
                dd2Rank: 1,
                td3Rank: 1,
                cfid: 33,
                cfparams: '2017-18' 
            },
            { 
                groupSet: 'Overall',
                groupValue: '2017-18',
                gp: 68,
                w: 49,
                l: 19,
                wPct: 0.721,
                min: 34.2,
                fgm: 9.3,
                fga: 18,
                fgPct: 0.516,
                fG3M: 2.5,
                fG3A: 6.1,
                fg3Pct: 0.419,
                ftm: 5.3,
                fta: 5.9,
                ftPct: 0.889,
                oreb: 0.5,
                dreb: 6.4,
                reb: 6.8,
                ast: 5.4,
                tov: 3,
                stl: 0.7,
                blk: 1.8,
                blka: 0.6,
                pf: 2,
                pfd: 4.8,
                pts: 26.4,
                plusMinus: 5.1,
                nbaFantasyPts: 47,
                dD2: 15,
                tD3: 2,
                gpRank: 1,
                wRank: 1,
                lRank: 1,
                wPctRank: 1,
                minRank: 1,
                fgmRank: 1,
                fgaRank: 1,
                fgPctRank: 1,
                fg3mRank: 1,
                fg3aRank: 1,
                fg3PctRank: 1,
                ftmRank: 1,
                ftaRank: 1,
                ftPctRank: 1,
                orebRank: 1,
                drebRank: 1,
                rebRank: 1,
                astRank: 1,
                tovRank: 1,
                stlRank: 1,
                blkRank: 1,
                blkaRank: 1,
                pfRank: 1,
                pfdRank: 1,
                ptsRank: 1,
                plusMinusRank: 1,
                nbaFantasyPtsRank: 1,
                dd2Rank: 1,
                td3Rank: 1,
                cfid: 33,
                cfparams: '2017-18' 
            },
            { 
                groupSet: 'Overall',
                groupValue: '2017-18',
                gp: 63,
                w: 41,
                l: 22,
                wPct: 0.651,
                min: 30.3,
                fgm: 8.1,
                fga: 16.8,
                fgPct: 0.483,
                fG3M: 1,
                fG3A: 3.4,
                fg3Pct: 0.308,
                ftm: 5.7,
                fta: 7.4,
                ftPct: 0.769,
                oreb: 2.3,
                dreb: 8.7,
                reb: 11,
                ast: 3.2,
                tov: 3.7,
                stl: 0.6,
                blk: 1.8,
                blka: 1.2,
                pf: 3.3,
                pfd: 6.5,
                pts: 22.9,
                plusMinus: 7.7,
                nbaFantasyPts: 44.3,
                dD2: 38,
                tD3: 0,
                gpRank: 1,
                wRank: 1,
                lRank: 1,
                wPctRank: 1,
                minRank: 1,
                fgmRank: 1,
                fgaRank: 1,
                fgPctRank: 1,
                fg3mRank: 1,
                fg3aRank: 1,
                fg3PctRank: 1,
                ftmRank: 1,
                ftaRank: 1,
                ftPctRank: 1,
                orebRank: 1,
                drebRank: 1,
                rebRank: 1,
                astRank: 1,
                tovRank: 1,
                stlRank: 1,
                blkRank: 1,
                blkaRank: 1,
                pfRank: 1,
                pfdRank: 1,
                ptsRank: 1,
                plusMinusRank: 1,
                nbaFantasyPtsRank: 1,
                dd2Rank: 1,
                td3Rank: 1,
                cfid: 33,
                cfparams: '2017-18' 
            },
            { 
                groupSet: 'Overall',
                groupValue: '2017-18',
                gp: 72,
                w: 59,
                l: 13,
                wPct: 0.819,
                min: 35.4,
                fgm: 9,
                fga: 20.1,
                fgPct: 0.449,
                fG3M: 3.7,
                fG3A: 10,
                fg3Pct: 0.367,
                ftm: 8.7,
                fta: 10.1,
                ftPct: 0.858,
                oreb: 0.6,
                dreb: 4.8,
                reb: 5.4,
                ast: 8.8,
                tov: 4.4,
                stl: 1.8,
                blk: 0.7,
                blka: 1.4,
                pf: 2.3,
                pfd: 7,
                pts: 30.4,
                plusMinus: 7.3,
                nbaFantasyPts: 53,
                dD2: 31,
                tD3: 4,
                gpRank: 1,
                wRank: 1,
                lRank: 1,
                wPctRank: 1,
                minRank: 1,
                fgmRank: 1,
                fgaRank: 1,
                fgPctRank: 1,
                fg3mRank: 1,
                fg3aRank: 1,
                fg3PctRank: 1,
                ftmRank: 1,
                ftaRank: 1,
                ftPctRank: 1,
                orebRank: 1,
                drebRank: 1,
                rebRank: 1,
                astRank: 1,
                tovRank: 1,
                stlRank: 1,
                blkRank: 1,
                blkaRank: 1,
                pfRank: 1,
                pfdRank: 1,
                ptsRank: 1,
                plusMinusRank: 1,
                nbaFantasyPtsRank: 1,
                dd2Rank: 1,
                td3Rank: 1,
                cfid: 33,
                cfparams: '2017-18' 
            } 
        ];


        players.forEach(function(player) {
            let onePlayer = myPlayer.getStats(player);
            myTeam.addStat(onePlayer);
        });

        res.send(myTeam._stats);
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
        this.router.get('/stats', this.getStats);
        this.router.get('/:id', this.getOne);
    }

}

// Create MyFantasyTeamRouter, and export its configured Express.Router
const teamRoutes = new MyFantasyTeamRouter();
teamRoutes.init();

export default teamRoutes.router;