import React, { useState } from 'react'
import { Locals } from './whoWeHelp list/Locals'
import { Locals2 } from "./whoWeHelp list/Locals2";

const obj = {
    listaLokalna: [<Locals />],
    listaLokalna2: [<Locals2 />],
}

export function WhoWeHelpLocals() {
    const [data, setData] = useState(obj.listaLokalna);
    return (
        <div className='who-we-help-list__container'>
            <div className='who-we-help-list__header'>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, nemo nostrum possimus ratione sapiente tenetur voluptatibus. Est et quam quisquam?
                </h2>
            </div>
            {
                data.map((el, i) => <li key={i}>{el}</li>)
            }
            <div className='fundations-buttons organization-buttons'>
                <button
                    className='fundations-site__button fundations-active'
                    onClick={() => setData(obj.listaLokalna)}>
                    1
                </button>
                <button
                    className='fundations-site__button'
                    onClick={() => setData(obj.listaLokalna2)}>
                    2
                </button>
            </div>
        </div>
    )
}