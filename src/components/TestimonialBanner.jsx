import React from 'react';
import styles from '../styles/testimonialBanner.module.css';

// Placeholder decorative images (replace with your own if needed)
import decoLeft from '../assets/Testimonial/left.svg';
import decoRight from '../assets/Testimonial/right.svg';
import quoteImg from '../assets/Testimonial/quote.png';
import webflowLogo from '../assets/Testimonial/webflow.svg';

const TestimonialBanner = () => (
    <section className={styles.wrapper}>
        <div className={styles.banner}>
            <img src={quoteImg} alt="quote" className={styles.quoteIcon} />
            <div className={styles.text}>
                Designjoy shows that they know the art of subtlety.
            </div>
            <img src={webflowLogo} alt="webflow logo" className={styles.author} />
            <img src={decoLeft} alt="decorative left" className={styles.decoLeft} />
            <img src={decoRight} alt="decorative right" className={styles.decoRight} />
        </div>
    </section>
);

export default TestimonialBanner; 