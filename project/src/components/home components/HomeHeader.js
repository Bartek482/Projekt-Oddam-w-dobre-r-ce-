import React from "react";
import Decoration from "../../assets/Decoration.svg"
export function HomeHeader () {
    return (
        <>
            <div className='home-header'>
                <div className='background-header'></div>
                <div className='function-header'>
                    <ul className='login_and_register'>
                            <li className='login-button'>Zaloguj</li>
                            <li className='login-button'>Załóż konto</li>
                    </ul>
                    <ul className='nav-buttons'>
                            <li className='header-button__small'>Start</li>
                            <li className='header-button__small'>O co chodzi?</li>
                            <li className='header-button__small'>O nas</li>
                            <li className='header-button__small'>Fundacja i organizacje</li>
                            <li className='header-button__small'>Kontakt</li>
                    </ul>
                    <div className='header-text'>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <img className='header-decoration' src={Decoration} alt='deco'/>
                    <ul className='header-buttons'>
                            <li className='header-button__big'>Oddaj rzeczy</li>
                            <li className='header-button__big'>Zorganizuj zbiórkę</li>
                    </ul>
                </div>
            </div>
        </>
    )
}