import * as NBA from 'nba';
import { Player } from '../interfaces/types';

export class Players {

	constructor() {}
            
    create( someone: string ) {

        let info = NBA.findPlayer(someone);

        let player: Player = {
            firstName: info.firstName, 
            lastName: info.lastName, 
            playerId: info.playerId, 
            teamId: info.teamId, 
            fullName: info.fullName                
        }

        return player;                        
    }

    getStats( someone: any ) {
        let player = NBA.stats.playerSplits({ PlayerID: someone.playerId })
                        .then(
                            function (res) {
                                for (let item in res) {
                                    if( item === 'overallPlayerDashboard') {
                                        console.log(res[item]);
                                    }
                                }
                            },
                            function (err) {
                                console.log(err);
                            })
    }

}