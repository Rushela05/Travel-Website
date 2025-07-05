import React from "react";
import './main.scss'
import img from '../../Assets/image1.jpg'
import img from '../../Assets/image2.jpg'
import img from '../../Assets/image3.jpg'
import img from '../../Assets/image4.jpg'
import img from '../../Assets/image5.jpg'
import img from '../../Assets/image6.jpg'
import img from '../../Assets/image7.jpg'
import img from '../../Assets/image8.jpg'
import img from '../../Assets/image9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
]

const Main = () => {
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle flex">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade flex">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price flex">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc flex">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        Details <LuClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </section>
    )
    
}

export default Main