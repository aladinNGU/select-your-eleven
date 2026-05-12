import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectedCard = ({ player, removeSelectedPlayer }) => {
  const handleRemoveSelectedPlayer = () => {
    removeSelectedPlayer(player);
  };
  return (
    <div className="flex justify-between mt-4 items-center border-2 border-gray-400 rounded-2xl p-4">
      <div className="flex">
        <div>
          <img className="w-12 h-12 rounded-2xl" src={player.img} alt="" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{player.name}</h3>
          <p>{player.role}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemoveSelectedPlayer(player.id)}
          className="btn btn-warning text-red-600 rounded-full"
        >
          <RiDeleteBinLine size="24px" />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
