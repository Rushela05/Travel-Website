import React from "react";
import './footer.scss'
import video2 from "../../Assets/video 2.mp4"
import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoplay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                    <div className="footerCard flex">
                        <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="a" className="logo flex">
                                    <MdOutlineTravelExplore className="icon" />
                                    Travel.
                                </a>
                            </div>

                            <div className="footerParagrapgh">
                                Discover breathtaking destinations, hidden gems, and unforgettable experiences. Whether you're planning your next getaway or just dreaming of adventure, we're here to guide you every step of the way. Start exploring today!
                            </div>

                            <div className="footersocials">
                                <AiOutlineTwitter className="icon"/>
                                <FaYoutube className="icon"/>
                                <AiOutlineInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>

                            </div>
                        </div>

                        <div className="footerLinks grid">
                            <div className="linkGroup">
                                <span className="groupTitle">
                                    Our Agency 
                                </span>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>
                                    Services
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>
                                    Insuarance
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>
                                    Agency
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>
                                    Tourism 
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className="icon"/>
                                    Payment
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Footer