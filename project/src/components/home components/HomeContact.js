import React from "react"
import decoration from "../../assets/Decoration.svg"

export function HomeContact() {
    return (
        <div className='home-contact'>
            <div className='home-contact__container'>
                <div className='home-contact__header'>
                    <h1>Skontaktuj się z nami</h1>
                </div>
                <div className='home-contact__decoration'>
                    <img src={decoration} alt='deco'/>
                </div>
                <div>
                    <form className='home-contact__form'>
                        <label className='contact-label' htmlFor='name'>Wpisz swoje imię</label>
                        <input className='contact-input' id='name' type='text' required />
                        <label className='contact-label' htmlFor='email'>Wpisz swój email</label>
                        <input className='contact-input' id='email' type='email' required />
                        <label className='contact-label' htmlFor='message'>Wpisz swoją wiadomość</label>
                        <input className='contact-input' id='message' type='textarea' required />
                    </form>
                </div>
            </div>
            <img className='home-contact__background' src={require('../../assets/Background-Contact-Form.jpg')} />
        </div>
    )
}