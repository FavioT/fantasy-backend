export interface Player {
	firstName: string, 
    lastName: string, 
    playerId: number, 
    teamId: number, 
    fullName: string,
    teamName?: string
}

export interface PlayerStats {
	groupSet: string,
    groupValue: string,
    gp: number,
    w: number,
    l: number,
    wPct: number,
    min: number,
    fgm: number,
    fga: number,
    fgPct: number,
    fG3M: number,
    fG3A: number,
    fg3Pct: number,
    ftm: number,
    fta: number,
    ftPct: number,
    oreb: number,
    dreb: number,
    reb: number,
    ast: number,
    tov: number,
    stl: number,
    blk: number,
    blka: number,
    pf: number,
    pfd: number,
    pts: number,
    plusMinus: number,
    nbaFantasyPts: number,
    dD2: number,
    tD3: number,
    gpRank: number,
    wRank: number,
    lRank: number,
    wPctRank: number,
    minRank: number,
    fgmRank: number,
    fgaRank: number,
    fgPctRank: number,
    fg3mRank: number,
    fg3aRank: number,
    fg3PctRank: number,
    ftmRank: number,
    ftaRank: number,
    ftPctRank: number,
    orebRank: number,
    drebRank: number,
    rebRank: number,
    astRank: number,
    tovRank: number,
    stlRank: number,
    blkRank: number,
    blkaRank: number,
    pfRank: number,
    pfdRank: number,
    ptsRank: number,
    plusMinusRank: number,
    nbaFantasyPtsRank: number,
    dd2Rank: number,
    td3Rank: number,
    cfid: number,
    cfparams: string
}

export interface IndividualStat {
	playerId: number,
	playerStats: PlayerStats
}