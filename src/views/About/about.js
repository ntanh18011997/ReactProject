import React from "react";
import './about.scss'
import TuanAnh from "../../assets/images/TuanAnh.jpg"
class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="container-about">
                    <div className="about-sidebar">
                        <div className="about-sidebar__avatar">
                            <img src={TuanAnh} className="about-sidebar__avatar-img"></img>
                        </div>
                        <div className="about-sidebar__infor">
                            <h2>Nguyen Tuan Anh</h2>
                            <h3>FrontEnd ReactJS</h3>
                            <p>Phone: 0393.141.801</p>
                            <p>Birth: 18/01/1997</p>
                            <p>Address: HCM city</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="about-content-text">
                            <p>My home town at Quang Tri provice, at there have most of storm flood in VN forcus</p>
                            <p>An area poor but studious land</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About