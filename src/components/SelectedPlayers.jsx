import React from "react";
import "./Player.css";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({ selectedPlayers, removeSelectedPlayer }) => {
  return (
    <div>
      <h3>Selected Players: {selectedPlayers.length}</h3>
      <div className="grid grid-cols-1">
        {selectedPlayers.map((player) => (
          <SelectedCard
            player={player}
            selectedPlayers={selectedPlayers}
            removeSelectedPlayer={removeSelectedPlayer}
          ></SelectedCard>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
