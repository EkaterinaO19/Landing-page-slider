import React, {useEffect} from 'react';
import styles from './ScrollableSlider.module.css'
import Image1 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unspl.png';
import Image2 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsp.png';
import Image3 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-u.png';
import Image5 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsplash3 .png';
import Image6 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsplash3 .png';
import Image4 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsplas.png';
import Image7 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsplash 1.png';
import Image8 from '../../assets/slider-section/andres-vera-CmmYT6Mm948-unsplash2.png';


const ScrollableSlider = () => {

    useEffect(() => {
        const content = document.getElementById('content_2');
        const onScroll = () => {
            const scrolledY = window.scrollY;

            if (scrolledY > 1400 && scrolledY < 3000) {
                content.style.marginTop = 200 + 'px';
                content.style.position = "fixed";
                content.style.top = scrolledY * 0.001 + 'px';
                content.style.left = -(scrolledY - 1400) * 0.55 + 'px';
            }
            if (scrolledY <= 1400) {
                content.style.position = "initial";

            }
            if (scrolledY >= 3000) {

                content.style.position = "absolute";
                content.style.top = 3000 + 'px';

            }

        }

        window.addEventListener('scroll', onScroll)
        return content.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <h1 className={styles.title}>
                Lorem ipsum dolor sit amet
            </h1>
            <div className={styles.content_2} id="content_2">
                <div className={styles.card}>
                    <img src={Image1} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image2} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image3} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image4} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image5} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image6} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image7} alt={'image'}/>
                </div>
                <div className={styles.card}>
                    <img src={Image8} alt={'image'}/>
                </div>
            </div>
        </>

    );
};

export default ScrollableSlider;
