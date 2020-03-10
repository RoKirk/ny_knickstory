import React from 'react'
import PlayerView from "../Views/PlayerView";
import NavigationBar from "../Shared/NavigationBar"
import BlogInterface from "../Shared/BlogInterface"


import React, { Component } from 'react'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            player: {}
         };
    }

    getPlayer = async () => {
        try {
            let response = await axios.get("http://localhost:3000/player/{pla}")
            console.log(response)
            this.setState({
                player: response.data,
                playerLoaded: true
            });
        }
        catch (error) {
            console.log(error)
        }
        // await axios.get("http://localhost:3000/players").then(jsonRes => {
        // });
    };

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Player Page Present</h1>
                <PlayerView />
                <BlogInterface />
            </div>
            
        );
    }
}

