import * as NBA from 'nba';
import { Player } from '../interfaces/types';

export class Players {

	constructor() {}
            
    create( someone: string ) {

        let info = NBA.findPlayer(someone);

        let basicInfo: Player = {
            firstName: info.firstName, 
            lastName: info.lastName, 
            playerId: info.playerId, 
            teamId: info.teamId, 
            fullName: info.fullName                
        }

        return basicInfo;                        
    }

    getStats( someone: number ) {
        let player = NBA.stats.playerSplits({ PlayerID: someone })
                        .then(
                            function (res) {
                                for (let item in res) {
                                    if( item === 'overallPlayerDashboard') {
                                        console.log(res[item]);
                                        return res[item];
                                    }
                                }
                            },
                            function (err) {
                                console.log(err);
                            })
    }

}