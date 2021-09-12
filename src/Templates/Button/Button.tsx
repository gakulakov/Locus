import React, {FC} from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
    value: string
}

export const Button: FC<ButtonProps> = (props) => {

    const {value} = props

    return (
        <button className={classes.Button}>
            {value}
        </button>
    )
}