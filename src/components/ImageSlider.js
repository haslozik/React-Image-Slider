import React, { useState, useRef } from 'react';
import { SliderData } from '../data/ImageData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    timeout.current = setTimeout(nextSlide, 4000);

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    // console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={ prevSlide }/>
            <FaArrowAltCircleRight className="right-arrow" onClick={ nextSlide }/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={ index === current ? 'slide active' : 'slide' } key={ index }>
                        { index === current && (<img src={ slide.image } alt="New York" className="image"/>) }
                    </div>
                );
            })}
        </section>
    )
}

export default ImageSlider;
