import React from "react";
import logo from '../../assets/images/Todolist.jpg';
import { Connect, connect } from "react-redux";
import './home.scss'
import Color from "../HOC/Color";
import videobackground from '../../assets/audio/videobackground.mp4'
class Home extends React.Component{
    render(){
        
        return(
            <div className="container-home">
                <section className="container-home-backgound">
                    <video className="container-home-backgound-video" autoPlay loop muted src={videobackground}/>
                    <div className="container-home-overlay"></div>
                    <div className="container-home-title">Tuấn Anh</div>
                    <div className="container-home-content">FROM NO STACK TO FULLSTACK</div>
                </section>
            </div>
        )
    }
}

export default Color(Home)