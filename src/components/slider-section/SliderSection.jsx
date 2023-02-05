import React from 'react';
import styles from './SliderSection.module.css'
import ScrollableSlider from "../scrollable-slider/ScrollableSlider";
import {pictures} from "../../pictures";

function SliderSection(props) {
    return (
        <div >
            <h1 className={styles.title}>
                Lorem ipsum dolor sit amet
            </h1>
        <ScrollableSlider pictures={pictures}/>
        </div>
    );
}

export default SliderSection;