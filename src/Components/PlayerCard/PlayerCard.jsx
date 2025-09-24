import React, { useState } from "react";
import userImg from "../../assets/User_icon.png";
import flagImg from "../../assets/flag_icon.png";
import { toast } from "react-toastify";

const PlayerCard = ({player, availableBalance, setAvailableBalance, purchesedPlayer, setPurchesedPlayer}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleData = (playerData)=>{
    const playerPrice = parseInt(playerData.player_price.split("USD").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        toast("Not enough Balance")
        return;
    };
    setPurchesedPlayer([...purchesedPlayer, playerData])
    setIsSelected(true);
    setAvailableBalance(availableBalance-playerPrice)
  }
  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure className="h-64 rounded-2xl">
        <img
          className="w-full h-full object-cover"
          src={player.player_img}
          alt=""
        />
      </figure>
      <div className="">
        <div className="flex gap-1 mt-4">
          <img src={userImg} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex items-center justify-between mt-4 pb-3 border-b-1 border-b-neutral-400">
          <div className="flex gap-1">
            <img src={flagImg} alt="" />
            <h2>{player.player_country}</h2>
          </div>
          <div>
            <p className="btn">{player.player_role}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">Rating</p>
          <p className="font-bold">{player.ratings}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">{player.batting_style}</p>
          <p>{player.bowling_style}</p>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <p className="font-bold">Price : {player.player_price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleData(player)
            }}
            className="btn"
          >
            {isSelected===true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
