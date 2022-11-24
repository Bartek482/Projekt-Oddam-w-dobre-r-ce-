import React from "react";
import { HomeHeader } from "./home components/HomeHeader";
import { HomeThreeColumns } from "./home components/HomeThreeColumns";
import { HomeFourSteps } from "./home components/HomeFourSteps";
import { HomeAboutUs } from "./home components/HomeAboutUs";

export function Home () {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs />
        </>
    )
}