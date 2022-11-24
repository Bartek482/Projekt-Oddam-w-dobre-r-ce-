import React from "react";
import Decoration from "../../assets/Decoration.svg"
import {WhoWeHelpFundations} from "./WhoWeHelpFundations";
import {WhoWeHelpOrganizations} from "./WhoWeHelpOrganizations";
import {WhoWeHelpLocals} from "./WhoWeHelpLocals";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Home} from "../Home";
import {Login} from "../Login";

export function HomeWhoWeHelp() {
    return (
        <div className='home-who-we-help'>
            <div className='who-we-help__container'>
                <div className='who-we-help__header'>
                    <h2>Komu pomagamy</h2>
                </div>
                <div>
                    <img src={Decoration} />
                </div>
                <div className='who-we-help__buttons'>
                    <Link className='who-we-help__button button__active' to={'/fundacje'}>Fundacjom</Link>
                    <Link className='who-we-help__button' to={''}>Organizacjom pozarządowym</Link>
                    <Link className='who-we-help__button' to={''}>Lokalnym zbiórkom</Link>
                </div>
            </div>
        </div>
    )
}