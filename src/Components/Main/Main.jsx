import React from "react";
import './main.scss'
import img1 from '../../Assets/image1.jpg';
import img2 from '../../Assets/image2.jpg';
import img3 from '../../Assets/image3.jpg';
import img4 from '../../Assets/image4.jpg';
import img5 from '../../Assets/image5.jpg';
import img6 from '../../Assets/image6.jpg';
import img7 from '../../Assets/image7.jpg';
import img8 from '../../Assets/image8.jpg';
import img9 from '../../Assets/image9.jpg';


import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

const Data = [
    {
        id:1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Pichu',
        location: 'Peru',
        grade: 'CULTURAL REALX',
        fees: '$600',
        description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so called lost city of Incas. This palce is popular among tourists as the sunrise from the Sun Gate is simple spectacular.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle:'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef, the hallmark of this place is "lavish" and "beauty", Always interesting to be in this place.'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle:'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fess: '$800',
        description: 'According to the World Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        loaction: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractive.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees:'$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of its place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food'

    },

    {
        id:7,
        imgSrc: img7,
        destTitle:'Angkor Wat',
        location: 'Cambodia',
        grade: "CULTURAL RELAX",
        fees: '$790',
        description: 'Angkor Wat represents the entire range of khmer are from the 9th to 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventurous activities'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle:'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white marble built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz. The monument is breath takingly beautiful. This place is known for its luxurious stay and adventurous activities.'
    },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is a Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art and culture, food, temples, and beautiful sandy beaches.'
    }
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