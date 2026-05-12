import React, { useState } from "react";
import "./Player.css";
import { UserRound } from "lucide-react";

const Player = ({
  player,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const {
    name,
    img,
    country,
    flag,
    role,
    rating,
    bowling_style,
    batting_style,
    price,
  } = player;

  const handlePlayerPrice = (price) => {
    if (availableBalance < price) {
      alert("Do not have enough balance");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - price);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  // we can also create a separate function
  // ==========================================
  // const handlePurchasedPlayers = (player) => {
  //   const newHiredPlayers = [...selectedPlayers, player];
  //   setSelectedPlayers(newHiredPlayers);
  // };

  return (
    <div className="player-card">
      <div className="flex justify-center">
        <div className="image-container">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <div className="flex gap-2 text-start mt-2">
        <UserRound />
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <div className="flex gap-2 text-start items-center justify-between mt-3">
        <div className="thumbnail-img flex gap-2 text-start items-center">
          <img src={flag} alt="" />
          <h3 className="text-xl text-gray-500">{country}</h3>
        </div>
        <div>
          <span className="role">{role}</span>
        </div>
      </div>
      <div className="mt-6">
        <hr className="border border-gray-200"></hr>
      </div>
      <div className="mt-4">
        <span>Rating: {rating}</span>
      </div>
      <div className=" flex justify-between mt-4">
        <span className="font-bold">{batting_style}</span>
        <span>{bowling_style}</span>
      </div>
      <div className=" flex justify-between items-center mt-4">
        <span className="font-bold">Price: {price} m$</span>
        <button
          disabled={isSelected}
          onClick={() => {
            handlePlayerPrice(price);
          }}
          // can add multiple handler on onClick
          // ====================================
          // handlePurchasedPlayers(player)
          className="btn bg-[#E7FE28] rounded-2xl"
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
