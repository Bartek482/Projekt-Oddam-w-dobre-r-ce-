import React from "react";
import { HomeHeader } from "./home components/HomeHeader";
import {HomeThreeColumns} from "./home components/HomeThreeColumns";

export function Home () {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
        </>
    )
}