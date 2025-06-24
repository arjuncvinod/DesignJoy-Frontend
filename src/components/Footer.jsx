import React from 'react';
import styles from '../styles/footer.module.css';

import logo1 from "../assets/Marquee/1.svg"
import logo2 from "../assets/Marquee/2.svg"
import logo3 from "../assets/Marquee/3.svg"
import logo4 from "../assets/Marquee/4.svg"
import logo5 from "../assets/Marquee/5.svg"

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__cta_section}>
            <h2 className={styles.footer__cta_heading}>See if Designjoy is right for you. (It totally is.)</h2>
            <p className={styles.footer__cta_subheading}>
                Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.
            </p>
            <button className={styles.footer__cta_button}>Get started</button>
        </div>
        <div className={styles.footer__top}>
            <div className={styles.footer__clients}>
                <img src={logo1} alt="Memberstack" className={styles.footer__client_logo} />
                <img src={logo2} alt="nectar" className={styles.footer__client_logo} />
                <img src={logo3} alt="ASTRO" className={styles.footer__client_logo} />
                <img src={logo4} alt="xfinity" className={styles.footer__client_logo} />
                <img src={logo5} alt="cometchat" className={styles.footer__client_logo} />
            </div>
        </div>
        <div className={styles.footer__bottom}>
            <div className={styles.footer__brand_location}>
                <div className={styles.footer__brand}>
                    <img src="/src/assets/Hero/logo.svg" alt="Designjoy Logo" className={styles.footer__logo} />
                    <span className={styles.footer__brand_name}>Designjoy</span>
                </div>
                <div className={styles.footer__location}>
                    <img src="/src/assets/location.svg" alt="Location Icon" className={styles.footer__location_icon} />
                    <span>Designjoy is headquartered in Phoenix, Arizona.</span>
                </div>
            </div>
            <div className={styles.footer__links}>
                <ul className={styles.footer__links_list}>
                    <li><a href="#latest-projects">Latest projects</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className={styles.footer__links_list}>
                    <li><a href="#client-login">Client login</a></li>
                    <li><a href="#get-started">Get started</a></li>
                    <li><a href="#terms">Terms & conditions</a></li>
                    <li><a href="#privacy">Privacy policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer; 