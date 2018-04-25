import {Router, Request, Response, NextFunction} from 'express';
const FantasyTeam = require('../nba');

export class MyFantasyTeamRouter {
  router: Router

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
    res.send(FantasyTeam);
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

// Create MyFantasyTeamRouter, and export its configured Express.Router
const teamRoutes = new MyFantasyTeamRouter();
teamRoutes.init();

export default teamRoutes.router;