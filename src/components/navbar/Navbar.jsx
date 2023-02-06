import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/navbar/logo.svg';
import Title from '../../assets/navbar/Circeya.png'
import styles from './Navbar.module.css'
import {Container} from "react-bootstrap";

function NavigationBar(props) {
    return (
        <Navbar bg="dark" expand="lg" fixed="top" className={'d-flex justify-content-around align-items-center'}>
                <Navbar.Brand className={styles.left}>
                    <img src={Logo} alt={'logo'}/>
                    <img src={Title} alt={'title'}/>
                </Navbar.Brand>
                <Navbar.Text className={styles.right}>
                    <p className={styles.number}>+7 (495) 495-49-54</p>
                </Navbar.Text>
        </Navbar>
    );
}

export default NavigationBar;