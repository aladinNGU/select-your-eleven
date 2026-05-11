import React, { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  return (
    <div>
      <div className="mt-7">
        <h3>Total Players: {players.length}</h3>
      </div>
      <div className="grid grid-cols-4">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
