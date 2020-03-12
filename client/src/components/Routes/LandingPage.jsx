import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaDribbble } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";



const LandingPage = () => {
    return (
        <div className="landing-page">

            <Link to="/user_login"><FaDribbble /></Link>
            <Link to="/user_sign_up"><FaUserEdit /></Link>


            <h1 id="app-title">ny knickstory</h1>
            <Link to="/homepage">Enter Site</Link>
            
        </div>
    )
}

export default LandingPage