import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/servicesSection.module.css';
import brandingImage from '../assets/Services/brand.png';
import illustrationsImage from '../assets/Services/illustrations.png';
import socialMediaImage from '../assets/Services/social.png';
import webDesignImage from '../assets/Services/web.png';
import printPackagingImage from '../assets/Services/print.png';

const ServicesSection = () => {
    const carouselRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkArrowVisibility = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkArrowVisibility);
            checkArrowVisibility();

            return () => {
                carousel.removeEventListener('scroll', checkArrowVisibility);
            };
        }
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const { scrollWidth, clientWidth } = carouselRef.current;
            carouselRef.current.scrollTo({
                left: scrollWidth - clientWidth,
                behavior: 'smooth'
            });
        }
    };
    const services = [
        {
            id: 1,
            title: "Branding & Logos",
            description: "Craft a strong, memorable identity with expert branding and logos",
            bgImage: brandingImage,
            included: [
                "Logo design",
                "Branding guidelines",
                "Business cards",
                "Labels",
                "Letterheads",
                "Brand strategy",
                "Color palette"
            ]
        },
        {
            id: 2,
            title: "Custom Illustrations & Visuals",
            description: "Tailored illustrations and visuals to bring ideas to life",
            bgImage: illustrationsImage,
            included: [
                "Book Covers",
                "Character & Mascot Design",
                "Concept Art",
                "Custom Illustrations",
                "Graphic Novels",
                "Icons",
                "Infographics"
            ]
        },
        {
            id: 3,
            title: "Digital & Social Media Graphics",
            description: "Engaging graphics for all your digital and social needs",
            bgImage: socialMediaImage,
            included: [
                "Blog Graphics",
                "Facebook Graphics",
                "Instagram Graphics",
                "LinkedIn Graphics",
                "Social Media Banners & Posts",
                "Twitter Graphics",
                "Twitch & YouTube Graphics"
            ]
        },
        {
            id: 4,
            title: "Web Design & Development",
            description: "Modern, responsive websites that convert visitors into customers",
            bgImage: webDesignImage,
            included: [
                "Landing Page Design",
                "E-commerce Websites",
                "Corporate Websites",
                "Portfolio Websites",
                "Mobile Optimization",
                "UI/UX Design",
                "Website Maintenance"
            ]
        },
        {
            id: 5,
            title: "Print & Packaging Design",
            description: "Professional print materials and packaging that stand out",
            bgImage: printPackagingImage,
            included: [
                "Business Cards",
                "Brochures & Flyers",
                "Product Packaging",
                "Posters & Banners",
                "Magazine Layout",
                "Book Design",
                "Trade Show Materials"
            ]
        }
    ];

    return (
        <section className={styles.section} id='services'>
            <div className={styles.header} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">
                <h2 className={styles.title} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">Services</h2>
                <p className={styles.subtitle} data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">Everything you need to scale your brand, all in one place.</p>
            </div>
            <div className={styles.carouselContainer} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="30">
                {showLeftArrow && (
                    <button className={styles.navButton} onClick={scrollLeft}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
                <div className={styles.cards} ref={carouselRef} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="30">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={styles.serviceCard}
                            style={{ backgroundImage: `url(${service.bgImage})` }}
                            data-aos="fade-in"
                            data-aos-duration="600"
                            data-aos-delay={300 + (index * 200)}
                            data-aos-offset="20"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <div className={styles.idleContent}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>

                            <div className={styles.hoverContent}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <div className={styles.includedSection}>
                                    <div className={styles.includedLabel}>What's included:</div>
                                    <ul className={styles.includedList}>
                                        {service.included.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showRightArrow && (
                    <button className={styles.navButton} onClick={scrollRight}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;