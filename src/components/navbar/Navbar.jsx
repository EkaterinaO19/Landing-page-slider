import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/navbar/logo.svg';
import Title from '../../assets/navbar/Circeya.png'

function Navbar(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_group}>
                <div className={styles.left}>
                    <img src={Logo} alt={'logo'}/>
                    <img src={Title} alt={'title'}/>
                </div>
                <div className={styles.right}>
                    <p className={styles.number}>+7 (495) 495-49-54</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;