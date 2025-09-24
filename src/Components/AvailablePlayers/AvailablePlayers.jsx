import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playerPromise, availableBalance, setAvailableBalance, purchesedPlayer, setPurchesedPlayer }) => {
  const playerData = use(playerPromise);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {playerData.map((player, index) => (
        <PlayerCard key={index} purchesedPlayer={purchesedPlayer}  setPurchesedPlayer={setPurchesedPlayer} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
