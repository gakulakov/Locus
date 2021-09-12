import React from "react";
import classes from './ProjectsBlock.module.scss'
import leftImg from '../../Assets/images/Left.png'
import rightImg from '../../Assets/images/Rigth.png'
import centerImg from '../../Assets/images/Center.png'


export const ProjectsBlock = () => {

    const infoArr = [
        {
            id: 1, title: 'Project Livingroom', value: 'A simple guide to create the perfect livingro-' +
                'om for. Night Watc works beautifully in a wi-' +
                'de gamut of arrangements.',
            img: leftImg
        },
        {
            id: 2,
            title: 'Project workspace',
            value: 'A simple guide to create the perfect livingro-' +
                'om for. Night Watc works beautifully in a wi-' +
                'de gamut of arrangements.',
            img: centerImg
        },
        {
            id: 3,
            title: 'Library',
            value: 'A simple guide to create the perfect livingro-' +
                'om for. Night Watc works beautifully in a wi-' +
                'de gamut of arrangements.',
            img: rightImg
        }
    ]

    const generateInfo = () => infoArr.map(i => (
        <div key={i.id} className={i.id % 2 ? classes.Info : classes.InfoCenter}>
            {i.id % 2 ? null : <img className={classes.ImageCenter} src={i.img} alt="imagePreview"/>}
            <h1>{i.title}</h1>
            <p>{i.value}</p>
            {i.id % 2 ? <img className={classes.Images} src={i.img} alt="imagePreview"/> : null}
        </div>
    ))

    return (
        <div className={classes.ProjectsBlock}>
            {generateInfo()}
        </div>
    )
}