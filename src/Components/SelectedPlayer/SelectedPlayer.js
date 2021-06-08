import React from 'react';
import SelectedPlayerBox from '../SelectedPlayerBox/SelectedPlayerBox';
import './SelectedPlayer.css'

const SelectedPlayer = (props) => {

    const { totalPlayers, remove } = props;
    const newSelectedPlayers = totalPlayers;

    const totalBudget = newSelectedPlayers.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div>
            <div className="selected-player">
                <h4>Selected Players : {newSelectedPlayers.length} </h4>
                <h5>Total Budget : ${totalBudget} </h5>
            </div>
            <div>
                {
                    newSelectedPlayers.map(info => <SelectedPlayerBox
                        key={info.id}
                        playersInfo={info}
                        remove={remove} />)
                }
            </div>
        </div>


    );
};

export default SelectedPlayer;