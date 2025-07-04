import React from "react";
import './home.css'
import video from '../../Assets/video 1.mp4'

const Home = () => {
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type of="video 1/mp4"></video>
        </section>
    )
    
}

export default Home