import React, {useState, useEffect, useRef} from 'react';
import {Carousel} from 'antd';
import styles from './ScrollableSlider.module.css'


const ScrollableSlider = ({pictures}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const {next, prev} = sliderRef.current;
            if (window.scrollY > window.innerHeight) {
                prev();
            } else {
                next();
            }
        };


         window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sliderRef = useRef();

    return (<Carousel
            slidesToShow={4}
            ref={sliderRef}
            dots={false}
            afterChange={(current) => setCurrentSlide(current)}
            style={{height: '100vh'}}
        >
            {pictures.map((picture, index) => (<div key={picture.id} style={{display: 'flex'}}>
                    <img src={picture.src} alt={picture.title} style={{flex: 1}}/>
                </div>))}
        </Carousel>);
};

export default ScrollableSlider;
