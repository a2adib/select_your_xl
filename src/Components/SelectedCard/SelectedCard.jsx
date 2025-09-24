import React from "react";
import deletIcon from "../../assets/Delet-icon.png";
const SelectedCard = ({player, removePlayer}) => {
    
    const handleRemove = ()=>{
        removePlayer(player)
    }
  
    return (
    <div className="flex justify-between items-center p-3 border-2 border-gray-300 rounded-xl mt-5">
      <div className="flex items-center">
        <div className="w-16 h-16">
          <img src={player.player_img} className="w-full h-full rounded-xl" alt="" />
        </div>
        <div className="ml-2">
          <p>{player.player_name}</p>
          <p className="text-xs">{player.player_role}</p>
        </div>
      </div>
      <div>
        <div onClick={handleRemove}>
          <img src={deletIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
