import React from "react";
import Decoration from "../assets/Decoration.svg"

export function Login() {
    return (
        <div className='login-site'>
            <div className='function-header'>
                <ul className='login_and_register'>
                    <li className='login-button'>Zaloguj</li>
                    <li className='login-button'>Załóż konto</li>
                </ul>
                <nav className='nav-buttons'>
                    <a href='#' className='header-button__small'>Start</a>
                    <a href='#' className='header-button__small'>O co chodzi?</a>
                    <a href='#' className='header-button__small'>O nas</a>
                    <a href='#' className='header-button__small'>Fundacja i organizacje</a>
                    <a href='#' className='header-button__small'>Kontakt</a>
                </nav>
            </div>
            <div className='login-container'>
                <h1 className='login-title'>Zaloguj się</h1>
                <div><img src={Decoration}/></div>
                <div className='login-box'>
                    <label className='login-label' htmlFor='email'>Email</label>
                    <input className="inputs" id='email' type='email' required/>
                    <label className='login-label' htmlFor='password'>Hasło</label>
                    <input className="inputs" id='password' type='password' required/>
                </div>
                <form className='login-form__buttons'>
                    <a className='login-form__button form-register' href='#'>Załóż konto</a>
                    <a className='login-form__button form-login' href='#'>Zaloguj się</a>
                </form>
            </div>
        </div>
    )
}