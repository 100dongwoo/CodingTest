function solution(players, callings) {
  let playerIndex = {};
  players.forEach((player, index) => {
    playerIndex[player] = index;
  });

  for (const t of callings) {
    const idx = playerIndex[t];
    const beforePlayer = players[idx - 1];
    const beforeIndex = idx - 1;

    players[beforeIndex] = t;
    players[idx] = beforePlayer;

    playerIndex[t] = beforeIndex;
    playerIndex[beforePlayer] = idx;
  }
  return players;
}
