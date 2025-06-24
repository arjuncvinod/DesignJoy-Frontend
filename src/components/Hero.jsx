import React, { useState, useEffect } from 'react'
import styles from '../styles/hero.module.css'
import heroRightImg from '../assets/Hero/hero-right.svg'
import heroLogo from '../assets/Hero/logo.svg'
import Navigation from './Navigation'

const navLinks = ['I', 'Benefits', 'Recent work', 'Scope of work', 'Pricing', 'FAQs', 'Login'];

const Hero = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHamburgerClick = () => setMobileNavOpen(true);
  const handleCloseNav = () => setMobileNavOpen(false);

  return (
    <div className={styles.indexContainer}>
      {/* Top Branding */}
      <div className={styles.branding}>
        <img src={heroLogo} alt="DesignJoy logo" className={styles.logo}/>
        {/* Hamburger menu for mobile */}
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

      {/* Abstract Shapes */}
      {/* Left yellow organic shapes */}
      <div className={styles.yellowShapes}>
        <img src="https://cdn.prod.website-files.com/65869146639e0c4c1b094ebb/65869146639e0c4c1b094ebf_6484ceb82495841656250535_61195ef16ada8678daf3f267_Group%2045.svg" alt="" />
      </div>

      {/* Right side orange circular element */}
      <div className={styles.orangeCircle}>
        <img src={heroRightImg} alt="Hero right decoration" />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1 className={styles.mainTitle}>
          A design agency with a twist
        </h1>

        <p className={styles.mainSubtitle}>
          Design subscriptions to scale your business.
        </p>

        <button className={styles.ctaButton}>
          See plans
        </button>

        <p className={styles.guaranteeText}>
          Designs you'll, guaranteed
        </p>
      </div>

      {/* Desktop Navigation (only show on desktop) */}
      {!isMobile && (
        <div className={styles.desktopNavOnly}>
          <Navigation />
        </div>
      )}

      {/* Mobile Navigation Bar */}
      {isMobile && mobileNavOpen && (
        <nav className={styles.mobileNavBar}>
          <button
            className={styles.closeNav}
            onClick={handleCloseNav}
            aria-label="Close navigation"
          >
            &times;
          </button>
          <ul className={styles.mobileNavLinks}>
            {navLinks.slice(1).map((label) => (
              <li key={label}>
                <button
                  className={styles.mobileNavLink}
                  onClick={handleCloseNav}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Hero