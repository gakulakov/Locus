import React from "react";
import classes from './AboutUs.module.scss'
import whiteRoom from '../../Assets/images/WhiteRoom.png'


export const AboutUs = () => {
    return (
        <div className={classes.AboutUs}>
            <img src={whiteRoom} alt="whiteRoom"/>
            <div className={classes.Info}>
                <div className={classes.ContainerNumbers}>
                    <div className={classes.Numbers}>
                        <h1>
                            105
                        </h1>
                        <h3>
                            project done
                        </h3>
                    </div>
                    <div className={classes.Numbers}>
                        <h1>
                            12
                        </h1>
                        <h3>
                            years of
                            experience
                        </h3>
                    </div>
                    <div className={classes.Numbers}>
                        <h1>
                            10+
                        </h1>
                        <h3 style={{maxWidth: 212}}>
                            big company
                            partnership
                        </h3>
                    </div>
                </div>

                <div className={classes.Text}>
                    <p>
                        "Not able to tell you how happy I am with interior design.
                        Interior design has completely surpassed our expectations.
                        Interior design saved my business. Interior design is worth
                        much more than I paid."
                    </p>
                    <p>- Roscoe</p>
                </div>
            </div>
        </div>
    )
}