import React from "react";
import classes from './ContactUs.module.scss'
import {Button} from "../../Templates/Button/Button";


export const ContactUs = () => {
    return (
        <div className={classes.ContactUs}>
            <div className={classes.Left}>
                <h1>
                    Contact Us
                </h1>
                <p>
                    Have any questions? Want help
                    before getting started?
                </p>
            </div>
            <div className={classes.Right}>
                <div className={classes.InputContainer}>
                    <input type="text" placeholder={'Full name'}/>
                    <input type="text" placeholder={'Email address'}/>
                    <input type="text" placeholder={'Description'}/>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button value={'Send now'}/>
                </div>
            </div>
        </div>
    )
}