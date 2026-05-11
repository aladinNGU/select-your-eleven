import React from "react";
import "./Player.css";

const Player = ({ player }) => {
  const { name, img } = player;
  return (
    <div className="player-card">
      <h3 className="text-2xl">{name}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default Player;
