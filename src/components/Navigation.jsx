import React, { useState, useEffect, useMemo } from 'react';
import styles from '../styles/nav.module.css';

const Navigation = ({ isMobile = false, onNavigate, heroStyles, mobileNavOpen = false, onMobileToggle, onMobileClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [_mobileNavOpen, _setMobileNavOpen] = useState(false);

  const isNavOpen = mobileNavOpen !== undefined ? mobileNavOpen : _mobileNavOpen;
  // eslint-disable-next-line no-unused-vars
  const toggleNav = onMobileToggle || (() => _setMobileNavOpen(!_mobileNavOpen));
  const closeNav = onMobileClose || (() => _setMobileNavOpen(false));

  const navItems = useMemo(() => [
    { label: 'I', sectionId: 'hero' },
    { label: 'Features', sectionId: 'features' },
    { label: 'How we work', sectionId: 'howwework' },
    { label: 'Benefits', sectionId: 'benefits' },
    { label: 'Services', sectionId: 'services' },
    { label: 'FAQs', sectionId: 'faq' },
    { label: 'Login', sectionId: null }
  ], []);



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sectionsWithIds = navItems.filter(item => item.sectionId !== null);
      const sections = sectionsWithIds.map(item => {
        const element = document.getElementById(item.sectionId);
        return {
          id: item.sectionId,
          offsetTop: element ? element.offsetTop : 0,
          offsetBottom: element ? element.offsetTop + element.offsetHeight : 0
        };
      });

      const footerElement = document.getElementById('footer');
      if (footerElement && scrollPosition >= footerElement.offsetTop - 100) {
        setActiveIndex(-1);
        return;
      }

      let currentIndex = -1;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];

        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom) {
          currentIndex = navItems.findIndex(item => item.sectionId === section.id);
          break;
        }
      }

      if (currentIndex === -1) {
        let closestDistance = Infinity;
        let closestIndex = -1;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionCenter = section.offsetTop + (section.offsetBottom - section.offsetTop) / 2;
          const distance = Math.abs(scrollPosition - sectionCenter);

          if (distance < closestDistance && distance < window.innerHeight) {
            closestDistance = distance;
            closestIndex = navItems.findIndex(item => item.sectionId === section.id);
          }
        }

        currentIndex = closestIndex;
      }

      setActiveIndex(currentIndex);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [navItems]);

  const handleNavClick = (index) => {
    const item = navItems[index];

    if (item.sectionId) {
      setActiveIndex(index);
    } else {
      console.log('Login clicked');
    }

    if (onNavigate) onNavigate();
  };

  const renderMobileNav = () => {
    if (!isNavOpen) return null;

    return (
      <nav className={heroStyles?.mobileNavBar || styles.mobileNavBar}>
        <button
          className={heroStyles?.closeNav || styles.closeNav}
          onClick={closeNav}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <ul className={heroStyles?.mobileNavLinks || styles.mobileNavLinks}>
          {navItems.slice(0, -1).map((item) => ( 
            <li key={item.label}>
              <a
                href={`#${item.sectionId}`}
                className={heroStyles?.mobileNavLink || styles.mobileNavLink}
                onClick={closeNav}
              >
                {item.label === 'I' ? 'Home' : item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  if (isMobile) {
    return renderMobileNav();
  }

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {item.sectionId ? (
                <a
                  href={`#${item.sectionId}`}
                  className={`${styles.navButton} ${activeIndex === index ? styles.active : styles.inactive}`}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  className={`${styles.navButton} ${activeIndex === index ? styles.active : styles.inactive}`}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;