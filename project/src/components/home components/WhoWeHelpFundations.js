import React, { useState } from "react"
import { Fundations } from "./whoWeHelp list/Fundations"
import { Fundations2 } from "./whoWeHelp list/Fundations2"
import { Fundations3 } from "./whoWeHelp list/Fundations3"

const obj = {
    listaFundacji: [<Fundations />],
    listaFundacji2: [<Fundations2 />],
    listaFundacji3: [<Fundations3 />]
}

export function WhoWeHelpFundations() {
    const [data, setData] = useState(obj.listaFundacji);
    return (
        <div className='who-we-help-list__container'>
            <div className='who-we-help-list__header'>
                <h2>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </h2>
            </div>
                {
                    data.map((el, i) => <li key={i}>{el}</li>)
                }
            <div className='fundations-buttons'>
                <button
                    className='fundations-site__button fundations-active'
                    onClick={() => setData(obj.listaFundacji)}>
                    1
                </button>
                <button
                    className='fundations-site__button'
                    onClick={() => setData(obj.listaFundacji2)}>
                    2
                </button>
                <button
                    className='fundations-site__button'
                    onClick={() => setData(obj.listaFundacji3)}>
                    3
                </button>
            </div>

        </div>
    )
}