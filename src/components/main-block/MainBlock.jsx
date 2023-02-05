import React from 'react';
import styles from './MainBlock.module.css'
import Image1 from '../../assets/main-block/image1.png';
import Image2 from '../../assets/main-block/image2.png';

function MainBlock(props) {
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                ut aliquip ex ea commodo consequat
            </h1>
            <div className={styles.article}>
                <div className={styles.left}>
                    <img className={styles.image1} src={Image1} alt={'Image'}/>
                    <div className={styles.paragraph1_block}>
                        <div className={styles.paragraph1}>
                            <h1 className={styles.paragraph1_title}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h1>
                            <p className={styles.paragraph1_description}>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.paragraph2}>
                        <h1 className={styles.paragraph2_title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </h1>
                        <p className={styles.paragraph2_description}>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <img className={styles.image2} src={Image2} alt={'Image'}/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MainBlock;