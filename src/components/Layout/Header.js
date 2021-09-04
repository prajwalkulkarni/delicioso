import React from "react"
import styles from './Header.module.css'
import cover from '../../assets/cover.jpg';
import HeaderCartButton from './HeaderCartButton'
export default function Header(){
    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Delicioso</h1>
                <HeaderCartButton/>

            </header>
            <div className={styles['main-image']}>
                <img src={cover} alt="header cover"/>
            </div>
        </React.Fragment>
    )
}