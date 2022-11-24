import React from "react";
import {Link} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg"
import Shirt from "../../assets/Icon-1.svg"
import Bag from "../../assets/Icon-2.svg"
import Lens from "../../assets/Icon-3.svg"
import LoadingCircle from "../../assets/Icon-4.svg"

export function HomeFourSteps() {
    return (
        <div id='o-co-chodzi' className='home-four-steps'>
            <div className='four-steps-header'>
                <h2 className='four-steps__title'>Wystarczą 4 proste kroki</h2>
                <img className='four-steps__decoration' src={Decoration} alt='deco'/>
            </div>
            <div className='four-steps__container'>
                <div className='four-steps__info'>
                    <div><img src={Shirt} alt='koszula'/></div>
                    <p className='four-steps__text'>Wybierz rzeczy</p>
                    <div className='four-steps-text__decoration'></div>
                    <p className='four-steps__text'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='four-steps__info'>
                    <div><img src={Bag} alt='torba'/></div>
                    <p className='four-steps__text'>Spakuj je</p>
                    <div className='four-steps-text__decoration'></div>
                    <p className='four-steps__text'>skorzystaj z worków na śmieci</p>
                </div>
                <div className='four-steps__info'>
                    <div><img src={Lens} alt='lupa'/></div>
                    <p className='four-steps__text'>Zdecyduj komu chcesz pomóc</p>
                    <div className='four-steps-text__decoration'></div>
                    <p className='four-steps__text'>wybierz zaufane miejsce</p>
                </div>
                <div className='four-steps__info'>
                    <div><img src={LoadingCircle} alt='znak ładowania'/></div>
                    <p className='four-steps__text'>Zamów kuriera</p>
                    <div className='four-steps-text__decoration'></div>
                    <p className='four-steps__text'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <ul className='header-buttons'>
                <Link to='/login' className='header-button__big four-steps__button'>Oddaj rzeczy</Link>
            </ul>
        </div>
    )
}