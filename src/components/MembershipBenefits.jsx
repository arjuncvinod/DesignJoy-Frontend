import React, { useState } from 'react';
import styles from '../styles/membershipBenefits.module.css';
import decorTopLeft from '../assets/Membership/top-left.svg';
import decorTopRight from '../assets/Membership/top-right.svg';
import decorTopCenter from '../assets/Membership/top-center.svg';
import sparkle from '../assets/Membership/sparkle.svg';
import SubscriptionForm from './SubscriptionForm';

import icon1 from "../assets/Membership/1.png"
import icon2 from "../assets/Membership/2.png"
import icon3 from "../assets/Membership/3.png"
import icon4 from "../assets/Membership/4.png"
import icon5 from "../assets/Membership/5.png"
import icon6 from "../assets/Membership/6.png"

const benefits = [
    {
        icon: icon1,
        title: 'Design board',
        desc: `Add as many design requests to your board as you'd like.`
    },
    {
        icon: icon2,
        title: 'Lightning fast delivery',
        desc: 'Get your design one at a time in just a few days on average.'
    },
    {
        icon: icon3,
        title: 'Fixed monthly rate',
        desc: 'No surprises here! Pay the same fixed price each month.'
    },
    {
        icon: icon4,
        title: 'Top-notch quality',
        desc: 'Insane design quality at your fingertips whenever you need it.'
    },
    {
        icon: icon5,
        title: 'Flexible and scalable',
        desc: 'Scale up or down as needed, and pause or cancel at anytime.'
    },
    {
        icon: icon6,
        title: 'Unique and all yours',
        desc: 'Each of your designs is made especially for you and is 100% yours.'
    }
];

const MembershipBenefits = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <section className={styles.benefitsSection} id='benefits'>
            <img src={decorTopLeft} alt="" className={styles.decorTopLeft} />
            <img src={decorTopRight} alt="" className={styles.decorTopRight} />
            <img src={decorTopCenter} alt="" className={styles.decorCenter} />
            <img src={sparkle} alt="" className={styles.sparkle} />
            <div className={styles.content}>
                <h1 className={styles.heading}>Membership benefits</h1>
                <p className={styles.subtitle}>Perks so good you'll never need to go anywhere else for your design. Seriously.</p>
                <button className={styles.ctaButton} onClick={handleOpenModal}>Join Waitlist</button>
                <div className={styles.benefitsGrid}>
                    {benefits.map((b, i) => (
                        <div className={styles.benefitItem} key={i}>
                            <div className={styles.icon}><img src={b.icon} alt="" /></div>
                            <div className={styles.benefitTitle}>{b.title}</div>
                            <div className={styles.benefitDesc}>{b.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <SubscriptionForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
};

export default MembershipBenefits; 