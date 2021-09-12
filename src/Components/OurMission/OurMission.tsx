import React from "react";
import classes from './OurMission.module.scss'
import ourMission from '../../Assets/images/OurMissionjpg.jpg'


export const OurMission = () => {
    return (
        <div className={classes.OurMission}>
            <img src={ourMission} alt="ourMission"/>

            <div className={classes.Info}>
                <h1>
                    Our mission is to
                    deliver aesthetic visual
                    for your home
                </h1>

                <p>
                    By applying bacis psychology principles,
                    we are going to explain how perception
                    works and how we can use this understanding
                    to maximise the space that we occupy in
                    our homes.
                </p>
            </div>
        </div>
    )
}