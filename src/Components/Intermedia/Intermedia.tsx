import React, { FC } from "react";
import classes from './Intermedia.module.scss'


interface IntermediaProps {
    title: string,
    value?: string
}

export const Intermedia:FC<IntermediaProps> = (props) => {
    const {title, value} = props

    return (
        <div className={classes.Intermedia}>
            <h1>{title}</h1>
            <p>{value}</p>
        </div>
    )
}