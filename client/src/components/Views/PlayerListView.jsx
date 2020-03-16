import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";

const PlayerListView = (props) => {
    return (
        <div>
            {props.players.map((player, index) => (

                <div
                    key={index}>
                    
                    <div>{player.id}</div>
                    <Link to={`/players/${player.id}`} >{`${player.first_name} ${player.last_name}`}</Link>
                </div>
                
            ))}


        </div>
    )
}

export default PlayerListView
