import React from 'react'
import TeamView from '../Views/TeamView'
import NavigationBar from "../Shared/NavigationBar"
import BlogInterface from "../Shared/BlogInterface"

const Team = () => {
    return (
        <div>
            <NavigationBar />
            <h1>Team Page Present</h1>
            <TeamView />
            <BlogInterface />
            
        </div>
    )
}

export default Team
