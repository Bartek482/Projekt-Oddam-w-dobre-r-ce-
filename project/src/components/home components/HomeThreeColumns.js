import React from "react";

export function HomeThreeColumns() {
    return (
        <div className='three-columns__container'>
            <div className='three-columns__info'>
                <h1 className='three-columns__count'>10</h1>
                <h2 className='three-columns__title'>Oddanych worków</h2>
                <p className='three-columns__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugit iste mollitia nemo quibusdam saepe suscipit voluptates</p>
            </div>
            <div className='three-columns__info'>
                <h1 className='three-columns__count'>5</h1>
                <h2 className='three-columns__title'>Wspartych organizacji</h2>
                <p className='three-columns__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugit iste mollitia nemo quibusdam saepe suscipit voluptates</p>
            </div>
            <div className='three-columns__info'>
                <h1 className='three-columns__count'>7</h1>
                <h2 className='three-columns__title'>Zorganizowanych zbiórek</h2>
                <p className='three-columns__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugit iste mollitia nemo quibusdam saepe suscipit voluptates</p>
            </div>
        </div>
    )
}