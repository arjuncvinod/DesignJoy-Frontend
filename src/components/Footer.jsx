import React, { useState } from 'react';
import styles from '../styles/footer.module.css';
import SubscriptionForm from './SubscriptionForm';

// import logo1 from "../assets/Marquee/1.svg"
// import logo2 from "../assets/Marquee/2.svg"
// import logo3 from "../assets/Marquee/3.svg"
// import logo4 from "../assets/Marquee/4.svg"
// import logo5 from "../assets/Marquee/5.svg"

// import footerImg from "../assets/Footer/footer-img.svg"
import logo from "../assets/Footer/logo-bl-bg.jpg"

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__cta_section} data-aos="fade-up" data-aos-duration="800" data-aos-offset="50">
                <h2 className={styles.footer__cta_heading}>See if Designvault is right for you. (It totally is.)</h2>
                <p className={styles.footer__cta_subheading}>
                    Get a guided tour through Designvault, and find out how you and your team can change the way you source design, forever.
                </p>
                <button className={styles.footer__cta_button} onClick={handleOpenModal} data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">Join Waitlist</button>
            </div>
            <div className={styles.footer__top}>
                {/* <div className={styles.footer__clients}>
                    <img src={logo1} alt="Memberstack" className={styles.footer__client_logo} />
                    <img src={logo2} alt="nectar" className={styles.footer__client_logo} />
                    <img src={logo3} alt="ASTRO" className={styles.footer__client_logo} />
                    <img src={logo4} alt="xfinity" className={styles.footer__client_logo} />
                    <img src={logo5} alt="cometchat" className={styles.footer__client_logo} />
                </div> */}
            </div>
            <div className={styles.footer__bottom} data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-offset="30">
                <div className={styles.footer__brand_location} data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-offset="20">
                    <div className={styles.footer__brand}>
                        <img src={logo} alt="Designvault Logo" className={styles.footer__logo} />
                    </div>
                    <div className={styles.footer__location}>
                        {/* <img src={footerImg} alt="Location Icon" className={styles.footer__location_icon} /> */}
                        <span>An initiative by fimkin advertising</span>
                    </div>
                </div>
                <div className={styles.footer__links} data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-offset="20">
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
            <SubscriptionForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </footer>
    );
};

export default Footer; 