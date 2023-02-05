import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <p className={styles.footerText}> © TEST, 1022–2022</p>
            </div>
        </div>
    );
}

export default Footer;