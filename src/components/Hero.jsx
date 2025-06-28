import React, { useState, useEffect } from 'react'
import styles from '../styles/hero.module.css'
import heroRightImg from '../assets/Hero/hero-right.svg'
import heroLogo from '../assets/Hero/logo.png'
import Navigation from './Navigation'
import SubscriptionForm from './SubscriptionForm'

const Hero = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false); useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHamburgerClick = () => setMobileNavOpen(true);
  const handleCloseNav = () => setMobileNavOpen(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.indexContainer} id='hero'>
      <div className={styles.branding} data-aos="fade-down" data-aos-duration="800">
        <img src={heroLogo} alt="DesignJoy logo" className={styles.logo} />
        {isMobile && (
          <button
            className={styles.hamburger}
            onClick={handleHamburgerClick}
            aria-label="Open navigation"
          >
            <span className={styles.hamburgerIcon}></span>
          </button>
        )}
      </div>

      <div className={styles.yellowShapes} data-aos="fade-up-right" data-aos-duration="1200" >
        <img src="https://cdn.prod.website-files.com/65869146639e0c4c1b094ebb/65869146639e0c4c1b094ebf_6484ceb82495841656250535_61195ef16ada8678daf3f267_Group%2045.svg" alt="" />
      </div>

      <div className={styles.orangeCircle} data-aos="fade-up-right" data-aos-duration="1200" >
        <img src={heroRightImg} alt="Hero right decoration" />
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.mainTitle} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Unlimited <span style={{ color: '#ff6638' }}>Creative Design.</span> One Simple Subscription.
        </h1>

        <p className={styles.mainSubtitle} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          Design subscriptions to scale your business.
        </p>

        <button className={styles.ctaButton} onClick={handleOpenModal} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">
          Join Waitlist
        </button>

        <p className={styles.guaranteeText} data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
          Designs you'll, guaranteed
        </p>
      </div>

      <SubscriptionForm isOpen={isModalOpen} onClose={handleCloseModal} />

      {!isMobile && (
        <div className={styles.desktopNavOnly}>
          <Navigation />
        </div>
      )}

      {isMobile && (
        <Navigation
          isMobile={true}
          mobileNavOpen={mobileNavOpen}
          onMobileToggle={handleHamburgerClick}
          onMobileClose={handleCloseNav}
          heroStyles={styles}
        />
      )}
    </div>
  )
}

export default Hero