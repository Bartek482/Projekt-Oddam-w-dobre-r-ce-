import React from "react";
import { HomeHeader } from "./home components/HomeHeader";
import { HomeThreeColumns } from "./home components/HomeThreeColumns";
import { HomeFourSteps } from "./home components/HomeFourSteps";

export function Home () {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
        </>
    )
}