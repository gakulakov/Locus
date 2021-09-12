import React from "react";
import classes from './PlayButton.module.scss'
import play from '../../Assets/images/Play.svg'


export const PlayButton = () => {
    return (
        <div className={classes.PlayButton}>
            <img src={play} alt={'play'}/>
        </div>
    )
}