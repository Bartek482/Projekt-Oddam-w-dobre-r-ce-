import React from "react"
import { Link } from "react-router-dom"
import decoration from "../../assets/Decoration.svg"
export function HomeHeader () {
    return (
            <div className='home-header'>
                <div className='background-header'></div>
                <div className='function-header'>
                    <ul className='login_and_register'>
                            <Link to='/login' className='login-button'>Zaloguj</Link>
                            <Link to='/register' className='login-button'>Załóż konto</Link>
                    </ul>
                    <nav className='nav-buttons'>
                            <a href='#' className='header-button__small'>Start</a>
                            <a href='#o-co-chodzi' className='header-button__small'>O co chodzi?</a>
                            <a href='#o-nas' className='header-button__small'>O nas</a>
                            <a href='#' className='header-button__small'>Fundacja i organizacje</a>
                            <a href='#' className='header-button__small'>Kontakt</a>
                    </nav>
                    <div className='header-text'>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <img className='header-decoration' src={decoration} alt='deco'/>
                    <ul className='header-buttons'>
                            <li className='header-button__big'>Oddaj rzeczy</li>
                            <li className='header-button__big'>Zorganizuj zbiórkę</li>
                    </ul>
                </div>
            </div>
    )
}