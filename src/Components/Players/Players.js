import React, { useEffect, useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import playersDB from '../PlayersDB/playersDB.json';
import './Players.css';

const Players = () => {

    const [players, setPlayers] = useState([]);
    const [selectPlayers, setSelectPlayers] = useState([]);

    useEffect(() => {
        setPlayers(playersDB)
    }, []);

    const playerAddBtn = (player) => {
        const addPlayer = [...selectPlayers, player];

        if (selectPlayers.includes(player)) {
            alert("Oops! You already select this player! Select another one...");
        } else {
            setSelectPlayers(addPlayer);
        }
    }

    const playerRemove = (id) => {
        const remain = selectPlayers.filter(player => player.id !== id);
        setSelectPlayers(remain);
    }
    return (
        <div className="player-container">

            {/* Left Side  */}
            <div className="player-list">
                <h1 className="heading">Chose from these players </h1>
                <div className="row">
                    {
                        players.map(man => <SinglePlayer
                            key={man.id}
                            player={man}
                            btn={playerAddBtn} />)
                    }
                </div>
            </div>

            {/* Right Side  */}
            <div >
                <SelectedPlayer
                    totalPlayers={selectPlayers}
                    remove={playerRemove} />
            </div>

        </div>
    );
};

export default Players;