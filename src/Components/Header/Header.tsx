import React, {FC, useState} from 'react'
import classes from './Header.module.scss'
import logo from '../../Assets/images/Logo.svg'


interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {

    const [activeId, setActiveId] = useState<number>(1);

    const arrLinks = [
        {value: 'Home', id: 1},
        {value: 'Contact', id: 2},
        {value: 'Location', id: 3},
        {value: 'About Us', id: 4}
    ]

    return (
        <div className={classes.Header}>
            <img src={logo} alt="logo"/>

            <ul className={classes.Links}>
                {arrLinks.map((link, index) =>
                    <li
                        key={link.id}
                        onClick={() => setActiveId(link.id)}
                        className={`${classes.Link} ${activeId === link.id && classes.ActiveLink}`}>{link.value}</li>)}
            </ul>
            <button className={classes.Button}>Sign Up</button>
        </div>
    )
}