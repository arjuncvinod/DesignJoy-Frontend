import React from 'react';
import styles from '../styles/featureBanner.module.css';

import icon1 from '../assets/Features/1.png';
import icon2 from '../assets/Features/2.png';
import icon3 from '../assets/Features/3.png';

const features = [
    {
        icon: <img src={icon1} alt="Subscribe icon" className={styles.featureIcon} />,
        text: "Subscribe to a plan & request as many designs as you'd like."
    },
    {
        icon: <img src={icon2} alt="Browser icon" className={styles.featureIcon} />,
        text: "Receive your design within a few business days on average, Monday to Friday."
    },
    {
        icon: <img src={icon3} alt="Repeat icon" className={styles.featureIcon} />,
        text: "We'll revise the designs until you're 100% satisfied."
    }
];

const FeatureBanner = () => (
    <section className={styles.banner}>
        <h1 className={styles.heading}>
            We didn't reinvent the wheel, just design
        </h1>
        <p className={styles.subtitle}>
            Design as you know it is out the door. Design as you want it just arrived.
        </p>
        <div className={styles.features}>
            {features.map((feature, idx) => (
                <div className={styles.feature} key={idx}>
                    <div className={styles.icon}>{feature.icon}</div>
                    <div className={styles.text}>{feature.text}</div>
                </div>
            ))}
        </div>
    </section>
);

export default FeatureBanner; 