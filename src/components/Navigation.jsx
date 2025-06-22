import React, { useState } from 'react';
import styles from '../styles/nav.module.css';

const Navigation = ({ isMobile = false, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: 'I', active: false },
    { label: 'Benefits', active: false },
    { label: 'Recent work', active: false },
    { label: 'Scope of work', active: false },
    { label: 'Pricing', active: false },
    { label: 'FAQs', active: false },
    { label: 'Login', active: false }
  ];

  const handleNavClick = (index) => {
    setActiveIndex(index);
    if (onNavigate) onNavigate();
  };

  return (
    <div className={isMobile ? styles.mobileNav : styles.navigationContainer}>
      <nav className={styles.navigation}>
        <ul className={isMobile ? styles.mobileNavList : styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <button 
                className={`${styles.navButton} ${activeIndex === index ? styles.active : styles.inactive}`}
                onClick={() => handleNavClick(index)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;