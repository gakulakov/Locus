import React, {FC} from "react";
import classes from './VideoBlock.module.scss'
import {PlayButton} from "../../Templates/PlayButton/PlayButton";


interface VideoBlockProps {

}

export const VideoBlock:FC<VideoBlockProps> = () => {
    return (
        <div className={classes.VideoBlock}>
            <div className={classes.Mock} />


            <div className={classes.About}>
                <p>
                    We provide design and build
                    for commercial building,
                    interior and furniture to improve
                    the better life.
                </p>
                <h3>S E E &nbsp; V I D E O</h3>
                <PlayButton />
            </div>
        </div>
    )
}