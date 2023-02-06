import React from 'react';
import styles from './SliderSection.module.css'
import ScrollableSlider from "../scrollable-slider/ScrollableSlider";

function SliderSection(props) {
    return (
        <>
            <h1 className={styles.title}>
                Lorem ipsum dolor sit amet
            </h1>
            <ScrollableSlider/>
        </>
    );
}

export default SliderSection;