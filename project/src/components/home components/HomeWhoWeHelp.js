import React, { useState } from "react";
import decoration from "../../assets/Decoration.svg"
import { WhoWeHelpFundations } from "./WhoWeHelpFundations"
import { WhoWeHelpOrganizations } from "./WhoWeHelpOrganizations"
import { WhoWeHelpLocals } from "./WhoWeHelpLocals"

const obj = {
    fundacje:[<WhoWeHelpFundations />],
    organizacje: [<WhoWeHelpOrganizations />],
    zbiorki: [<WhoWeHelpLocals />]
}

export function HomeWhoWeHelp() {
    const [data, setData] = useState(obj.fundacje);
    return (
        <div className='home-who-we-help'>
            <div className='who-we-help__container'>
                <div className='who-we-help__header'>
                    <h2>Komu pomagamy</h2>
                </div>
                <div>
                    <img src={decoration} />
                </div>
                <div className='who-we-help__buttons'>

                    <button
                        className='who-we-help__button button__active'
                        onClick={() => setData(obj.fundacje)}>
                        Fundacjom
                    </button>
                    <button
                        className='who-we-help__button'
                        onClick={() => setData(obj.organizacje)}
                    >
                        Organizacjom pozarządowym
                    </button>
                    <button
                        className='who-we-help__button'
                        onClick={() => setData(obj.zbiorki)}
                    >
                        Lokalnym zbiórkom
                    </button>
                </div>
            </div>
            <ul>
                {
                    data.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    )
}