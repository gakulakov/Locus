import React from "react";
import classes from './LogosBlock.module.scss'
import klamby from '../../Assets/images/KLAMBY.png'
import may from '../../Assets/images/MAY.png'
import zalora from '../../Assets/images/ZALORA.png'
import geulis from '../../Assets/images/GEULIS.png'

export const LogosBlock = () => {
    const imgArray = [klamby, may, zalora, geulis]

    return (
        <div className={classes.LogosBlock}>
            {imgArray.map((i, index) => <img key={index} src={i} alt="logo"/>)}
        </div>
    )
}