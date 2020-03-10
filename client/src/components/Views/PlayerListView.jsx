import React from 'react'
import BlogInterface from "../Shared/BlogInterface"

const PlayerListView = (props) => {
    return (
        <div>
            {props.players.map((player, index) => (

                <div
                    key={index}>
                    <div>{player.first_name}</div>
                    <div>{player.last_name}</div>
                    <div>{player.id}</div>
                    <div>{player.first_name}</div>
                </div>
                
            ))}


        </div>
    )
}

export default PlayerListView
