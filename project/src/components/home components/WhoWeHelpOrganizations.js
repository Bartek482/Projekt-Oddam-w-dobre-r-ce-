import React, { useState } from 'react'
import { Organizations } from './whoWeHelp list/Organizations'
import { Organizations2 } from './whoWeHelp list/Organizations2'

const obj = {
    listaOrganizacji: [<Organizations />],
    listaOrganizacji2: [<Organizations2 />],
}

export function WhoWeHelpOrganizations() {
    const [data, setData] = useState(obj.listaOrganizacji);
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
                    onClick={() => setData(obj.listaOrganizacji)}>
                    1
                </button>
                <button
                    className='fundations-site__button'
                    onClick={() => setData(obj.listaOrganizacji2)}>
                    2
                </button>
            </div>
        </div>
    )
}