import React, {FC} from "react";
import classes from './MainAd.module.scss'
import mainAd from '../../Assets/images/MainImage.png'
import {Button} from "../../Templates/Button/Button";


interface MainAdProps {

}

export const MainAd: FC<MainAdProps> = () => {
    return (
        <div className={classes.MainAd}>
            <div className={classes.Info}>
                <h1>Get the inspiration
                    of interior design
                    here</h1>

                <p>architecture not only about engineering, it even
                    lands to art and aesthetics. With us, you will get
                    a residentical design with an extraordinary touch
                    of art.</p>
                
                <Button value={"Let's Go"} />
            </div>

            <img className={classes.Img} src={mainAd} alt="main ad"/>
        </div>
    )
}