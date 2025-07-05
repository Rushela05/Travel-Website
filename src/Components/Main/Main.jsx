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
import img10 from '../../Assets/image10.jpg';import img11 from '../../Assets/image11.jpg';import img12 from '../../Assets/image12.jpg';import img13 from '../../Assets/image13.jpg';import img14 from '../../Assets/image14.jpg';import img15 from '../../Assets/image15.jpg';
import img16 from '../../Assets/image16.jpg';


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
    },

    {
        id:10,
        imgSrc: img10,
        destTitle: 'Sigiriya',
        location:'Sri Lanka',
        grade: 'CULTURAL RELAX',
        fees:'$850',
        description:'Discover the ancient wonder of Sigiriya. Rising majestically from the jungle, this 5th-century rock fortress features stunning frescoes, landscaped gardens, and panoramic views from the summit. Once a royal palace, Sigiriya is a blend of history, art, and adventure — a must-visit for every traveler.'
    },

    {
        id:11,
        imgSrc: img11,
        destTitle: 'Banana Reef',
        location:'Maldives',
        grade: 'CULTURAL RELAX',
        fees:'$1000',
        description:"Dive into the vibrant underwater world of Banana Reef, one of the Maldives’ most famous diving spots. Shaped like a banana, this reef is teeming with colorful corals, exotic fish, reef sharks, and dramatic overhangs. With crystal-clear waters and gentle currents, it’s perfect for both beginners and experienced divers seeking an unforgettable marine adventure."
    },

    {
        id:12,
        imgSrc: img12,
        destTitle: 'The Great Wall of China',
        location:'China',
        grade: 'CULTURAL RELAX',
        fees:'$1200',
        description:"Stretching over 13,000 miles, the Great Wall of China is one of the world's most iconic landmarks. Built over centuries to protect ancient China, this architectural marvel winds through mountains, deserts, and valleys. Visitors can walk along its historic paths, take in breathtaking views, and experience the rich cultural legacy of a true world wonder."
    },

    {
        id:13,
        imgSrc: img13,
        destTitle: 'Kyoto',
        location:'Japan',
        grade: 'CULTURAL RELAX',
        fees:'$750',
        description:"Step into the charm of Kyoto, where ancient temples, serene gardens, and geisha culture meet timeless beauty. Once Japan’s imperial capital, Kyoto is home to iconic sights like the Fushimi Inari Shrine, Arashiyama Bamboo Grove, and centuries-old tea houses. A perfect blend of history and elegance, Kyoto offers a peaceful escape into Japan’s rich cultural heritage."
    },

    {
        id:14,
        imgSrc: img14,
        destTitle: 'Niagra Falls',
        location:'Canada',
        grade: 'CULTURAL RELAX',
        fees:'$1500',
        description:"Feel the roar and mist of Niagara Falls, one of the planet’s most awe‑inspiring natural wonders. On the Canadian side, the graceful Horseshoe Falls thunder 57 meters into the Niagara River, creating rainbows that arch over scenic walkways. Enjoy up‑close boat cruises, illuminated night views, and charming nearby towns—all combining adventure, romance, and unforgettable photo moments"
    },

    {
        id:15,
        imgSrc: img15,
        destTitle: 'Kandy Lake',
        location:'Sri Lanka',
        grade: 'CULTURAL RELAX',
        fees:'$900',
        description:"Nestled in the heart of Kandy city, Kandy Lake is a beautiful, man-made lake built in 1807 by King Sri Wickrama Rajasinghe. Surrounded by scenic greenery and cultural landmarks like the Temple of the Tooth Relic, the lake offers a peaceful escape from the city's bustle. A popular spot for relaxing walks and photography, it reflects the charm and history of Kandy, making it a must-visit destination for travelers."
    },

    {
        id:16,
        imgSrc: img16,
        destTitle: 'Seoul',
        location:'South Korea',
        grade: 'CULTURAL RELAX',
        fees:'$650',
        description:"Seoul, the vibrant capital of South Korea, is a dynamic mix of modern skyscrapers, high-tech subways, and rich cultural heritage. From the historic Gyeongbokgung Palace and traditional Bukchon Hanok Village to the bustling shopping districts of Myeongdong and futuristic Dongdaemun Design Plaza, Seoul offers something for every traveler. With delicious street food, K-pop culture, and scenic spots like Namsan Tower, it’s a city where tradition and innovation blend seamlessly."
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