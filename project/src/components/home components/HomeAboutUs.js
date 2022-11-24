import React from "react";
import Decoration from "../../assets/Decoration.svg"
import Signature from "../../assets/Signature.svg"

export function HomeAboutUs() {
    return (
        <div className='home-about-us'>
            <div className='about-us__container'>
                <div className='about-us__content'>
                    <div className='about-us__header'>
                        <h2>O nas</h2>
                    </div>
                    <div><img src={Decoration}/></div>
                    <div className='about-us__text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facilis impedit iste ullam veniam! Ab ad, architecto eaque ex nesciunt officia praesentium.</p>
                    </div>
                    <div className='signature'><img src={Signature}/></div>
                </div>
            </div>
            <div className='about-us__background'></div>
        </div>
    )
}