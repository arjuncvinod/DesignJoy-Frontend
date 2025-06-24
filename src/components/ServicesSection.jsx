import React from 'react';
import styles from '../styles/servicesSection.module.css';

const ServicesSection = () => (
    <section className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>Services</h2>
            <p className={styles.subtitle}>Everything you need to scale your brand, all in one place.</p>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.cards}>
            {/* Card 1: Highlighted */}
            <div className={styles.cardPrimary}>
                <h3 className={styles.cardTitle}>Branding & Logos</h3>
                <p className={styles.cardDesc}>Craft a strong, memorable identity with expert branding and logos</p>
                <hr className={styles.divider} />
                <div className={styles.includedLabel}>What's included:</div>
                <ul className={styles.includedList}>
                    <li>Logo design</li>
                    <li>Branding guidelines</li>
                    <li>Business cards</li>
                    <li>Labels</li>
                    <li>Letterheads</li>
                    <li>Labels</li>
                    <li>Letterheads</li>
                </ul>
            </div>
            {/* Card 2: Custom Illustrations & Visuals */}
            <div className={styles.cardPrimary}>
                <h3 className={styles.cardTitle}>Custom Illustrations & Visuals</h3>
                <p className={styles.cardDesc}>Tailored illustrations and visuals to bring ideas to life</p>
                <hr className={styles.divider} />
                <div className={styles.includedLabel}>What's included:</div>
                <ul className={styles.includedList}>
                    <li>Book Covers</li>
                    <li>Character & Mascot Design</li>
                    <li>Concept Art</li>
                    <li>Custom Illustrations</li>
                    <li>Graphic Novels</li>
                    <li>Icons</li>
                    <li>Infographics</li>
                </ul>
            </div>
            {/* Card 3: Digital & Social Media Graphics */}
            <div className={styles.cardPrimary}>
                <h3 className={styles.cardTitle}>Digital & Social Media Graphics</h3>
                <p className={styles.cardDesc}>Engaging graphics for all your digital and social needs</p>
                <hr className={styles.divider} />
                <div className={styles.includedLabel}>What's included:</div>
                <ul className={styles.includedList}>
                    <li>Blog Graphics</li>
                    <li>Facebook Graphics</li>
                    <li>Instagram Graphics</li>
                    <li>LinkedIn Graphics</li>
                    <li>Social Media Banners & Posts</li>
                    <li>Twitter Graphics</li>
                    <li>Twitch & YouTube Graphics</li>
                </ul>
            </div>
        </div>
    </section>
);

export default ServicesSection; 