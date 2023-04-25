const team = {
  _players: [
    {firstName: 'Pete', lastName: 'Wheeler', age: 55},
    {firstName: 'Sammy', lastName: 'Johnson', age: 49},
    {firstName: 'Thomas', lastName: 'Sampson', age: 51}
  ],
  _games: [
    {opponent: 'Jackals', teamPoints: 25, opponentPoints: 15},
    {opponent: 'Tigers', teamPoints: 10, opponentPoints: 21},
    {opponent: 'Pumas', teamPoints: 33, opponentPoints: 32}
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      newFirstName,
      newLastName,
      newAge
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      newOpponent,
      newTeamPoints,
      newOpponentPoints
    };
    this.games.push(game);
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
