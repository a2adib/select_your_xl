import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchesedPlayer,removePlayer}) => {
    return (
         <div className='max-w-[1200px] mx-auto'>
            {
                purchesedPlayer.map((player, index)=><SelectedCard key={index} player={player} removePlayer={removePlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;