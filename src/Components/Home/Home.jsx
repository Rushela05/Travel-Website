import React from "react";
import './home.scss'
import video from '../../Assets/video 1.mp4'

const Home = () => {
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type of="video 1.mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">
                        Search your holiday
                    </h1>
                    
                </div>
            </div>
        </section>
    )
    
}

export default Home