import React from 'react';
import classes from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {MainAd} from "./Components/MainAd/MainAd";
import {Intermedia} from "./Components/Intermedia/Intermedia";
import {VideoBlock} from "./Components/VideoBlock/VideoBlock";
import {OurMission} from "./Components/OurMission/OurMission";
import {ProjectsBlock} from "./Components/ProjectsBlock/ProjectsBlock";
import {LogosBlock} from "./Components/LogosBlock/LogosBlock";
import {AboutUs} from "./Components/AboutUs/AboutUs";
import {ContactUs} from "./Components/ContactUs/ContactUs";

function App() {
    return (
        <div className={classes.App}>
            <Header/>
            <MainAd/>
            <Intermedia title={'How it works'} value={'Spice up your space even simpler than you think'}/>
            <VideoBlock />
            <OurMission />
            <Intermedia title={'Our project'} value={'Introducing our first official project'}/>
            <ProjectsBlock />
            <Intermedia title={'Testimonial'}/>
            <LogosBlock />
            <AboutUs />
            <ContactUs />
        </div>
    );
}

export default App;
