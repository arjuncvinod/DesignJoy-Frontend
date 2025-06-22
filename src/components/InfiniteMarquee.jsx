import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from '../styles/infiniteScroll.module.css';

import logo1 from "../assets/Marquee/1.svg"
import logo2 from "../assets/Marquee/2.svg"
import logo3 from "../assets/Marquee/3.svg"
import logo4 from "../assets/Marquee/4.svg"
import logo5 from "../assets/Marquee/5.svg"
import logo6 from "../assets/Marquee/6.svg"
import logo7 from "../assets/Marquee/7.svg"

const marqueeImages = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,logo1, logo2, logo3, logo4, logo5, logo6, logo7
];

const InfiniteMarquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <Marquee gradient={false} speed={100} pauseOnHover={true}>
                {marqueeImages.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Marquee item ${idx + 1}`}
                        className={styles.marqueeImage}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default InfiniteMarquee; 