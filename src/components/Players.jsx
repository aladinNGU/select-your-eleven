import React, { use } from "react";
import Player from "./Player";

const Players = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const players = use(playersPromise);
  return (
    <div>
      <div className="font-bold mt-7">
        {/* <h3>Total Players: {players.length}</h3> */}
      </div>
      <div className="grid grid-cols-3">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
