import React from "react";

export function Fundations() {
    return (
        <div className='fundations-list'>
            <div className='fundations-list__container'>
                <div className='fundations-header'>
                    <h2>Fundacja "Dbam o Zdrowie"</h2>
                </div>
                <div className='fundations-items'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className='fundations-target'>
                <h3>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h3>
            </div>
            <div className='fundations-underline'></div>

            <div className='fundations-list__container'>
                <div className='fundations-header'>
                    <h2>Fundacja "Dla dzieci"</h2>
                </div>
                <div className='fundations-items'>ubrania, meble, zabawki</div>
            </div>
            <div className='fundations-target'>
                <h3>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h3>
            </div>
            <div className='fundations-underline'></div>

            <div className='fundations-list__container'>
                <div className='fundations-header'>
                    <h2>Fundacja "Bez domu"</h2>
                </div>
                <div className='fundations-items'>ubrania, jedzenie, ciepłe koce</div>
            </div>
            <div className='fundations-target'>
                <h3>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h3>
            </div>
        </div>
    )
}