import React, { useState } from "react";
import Decoration from "../assets/Decoration.svg"

export function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);



    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === 'email') {
            setEmail(value);
        }
        if (id === 'password') {
            setPassword(value);
        }
    }
    const loginHandler = (e) => {
        e.preventDefault()
        let obj = {
            email: email,
            password: password
        }
        if (password.length <= 6) {
            console.log('hasło za krotkie');
            setError('Hasło za krótkie');
        } else {
            console.log('wszystko ok');
        }
    }

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
                    <input className="inputs" id='email' type='email' value={email} onChange = {(e) => handleInputChange(e)} required/>
                    <label className='login-label' htmlFor='password'>Hasło</label>
                    <input className="inputs" id='password' type='password' value={password} onChange = {(e) => handleInputChange(e)} minLength='6' required/>
                    <div>{error && <p>{error}</p>}</div>
                </div>
                <form onSubmit={loginHandler} className='login-form__buttons'>
                    <a className='login-form__button form-register' href='#'>Załóż konto</a>
                    <button type='submit' className='login-form__button form-login' href='#'>Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}