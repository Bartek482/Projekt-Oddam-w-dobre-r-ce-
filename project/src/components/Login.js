import React, { useState } from "react"
import { Link } from "react-router-dom"
import decoration from "../assets/Decoration.svg"

export function Login() {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const [emailError, setEmailError] = useState(null)



    const handleInputChange = (e) => {
        const {id, value} = e.target
        if (id === 'email') {
            setEmail(value);
        }
        if (id === 'password') {
            setPassword(value)
        }
    }
    const loginHandler = (e) => {
        e.preventDefault()
        let obj = {
            email: email,
            password: password
        }

        if (email.includes('@')) {
            console.log('ok')
        } else {
            setEmailError('Podany email jest nieprawidłowy')
        }

        if (password.length <= 6) {
            setError('Podane hasło jest za krótkie')
        } else {
            console.log('wszystko ok')
        }
    }

    return (
        <div className='login-site'>
            <div className='function-header'>
                <ul className='login_and_register'>
                    <Link to='/login' className='login-button'>Zaloguj</Link>
                    <Link to='/register' className='login-button'>Załóż konto</Link>
                </ul>
                <nav className='nav-buttons'>
                    <Link to ='/' className='header-button__small'>Start</Link>
                    <a href='#' className='header-button__small'>O co chodzi?</a>
                    <a href='#' className='header-button__small'>O nas</a>
                    <a href='#' className='header-button__small'>Fundacja i organizacje</a>
                    <a href='#' className='header-button__small'>Kontakt</a>
                </nav>
            </div>
            <div className='login-container'>
                <h1 className='login-title'>Zaloguj się</h1>
                <div><img src={decoration}/></div>
                <div className='login-box'>
                    <label className='login-label' htmlFor='email'>Email</label>
                    <input className="inputs" id='email' type='email' value={email} onChange = {(e) => handleInputChange(e)} required/>
                    <div className='login-error'>{emailError && <p>{emailError}</p>}</div>
                    <label className='login-label' htmlFor='password'>Hasło</label>
                    <input className="inputs" id='password' type='password' value={password} onChange = {(e) => handleInputChange(e)} minLength='6' required/>
                    <div className='login-error'>{error && <p>{error}</p>}</div>
                </div>
                <form onSubmit={loginHandler} className='login-form__buttons'>
                    <Link to='/register' className='login-form__button form-register'>Załóż konto</Link>
                    <button type='submit' className='login-form__button form-login' href='#'>Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}