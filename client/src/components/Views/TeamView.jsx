import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const TeamView = (props) => {
    return (
        <div>
            {props.team.map((nyTeam, index) => (

                <div
                    key={index}>

                    <div>{nyTeam.id}</div>
                    <Link to={`/new_york_teams/${nyTeam.id}`} >{`${nyTeam.name} ${nyTeam.arena}`}</Link>
                </div>

            ))}


        </div>
    )
}

export default TeamView
