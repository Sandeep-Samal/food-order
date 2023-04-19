import React from "react";
import logo from "../assets/head/Group 1694 2.svg"

const Home = () => {
    return(
        <div>
            <header style={{height:"127px", background: "#F0F3F3"}}>
                <div className="top">
                <img alt="" src={logo} />
                </div>
                <div className="buttom"></div>
            </header>
        </div>
    )
}

export default Home