import React from 'react';

import img1 from "../assets/HowWeWork/1-new.png"
import img2 from "../assets/HowWeWork/2-new.png"
import img3 from "../assets/HowWeWork/3-new.png"
import img4 from "../assets/HowWeWork/4-new.png"

import styles from "../styles/howwework.module.css"


const HowWeWork = () => {
  const steps = [
    {
      number: '01',
      title: 'Pick your plan',
      description: 'Choose a subscription that fits your needs and login to your personal project board, accessible anytime, anywhere.',
      image: img1,
      alt: 'Pick your plan',
      imageOnRight: true,
    },
    {
      number: '02',
      title: 'Submit your requests',
      description: 'Request as many designs as you want and track every update instantly on our easy-to-use boards – no need for reminders.',
      image: img2,
      alt: 'Submit your requests',
      imageOnRight: false,
    },
    {
      number: '03',
      title: 'Perfect your design',
      description: 'Need tweaks? No problem. Share your ideas on dedicated design boards as comments and we\'ll make the updates in no time.',
      image: img3,
      alt: 'Perfect your design',
      imageOnRight: true,
    },
    {
      number: '04',
      title: 'Receive your design',
      description: 'Expect your design under 48 working hours - we deliver fast! Stay updated with notifications on changes and task progress.',
      image: img4,
      alt: 'Receive your design',
      imageOnRight: false,
    },
  ];

  return (
    <section className={`section ${styles.section} ${styles.sectionPadding}`} id='howwework'>
      <div className="container">
        <div className={`${styles.sectionTitle} ${styles.sectionTitleCenter}`} data-aos="fade-up" data-aos-duration="1000">
          <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">How We Work</h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">Hiring a design team has never been easier!</p>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className="row align-items-center mb-5">
              <div
                className={`col-lg-6 ${step.imageOnRight ? 'order-lg-1' : 'order-lg-2'}`}
                data-aos={step.imageOnRight ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay={200 + (index * 100)}
              >
                <div className={styles.content}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              <div
                className={`col-lg-6 ${step.imageOnRight ? 'order-lg-2' : 'order-lg-1'}`}
                data-aos={step.imageOnRight ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
                data-aos-delay={300 + (index * 100)}
              >
                <div className={styles.image}>
                  <img src={step.image} alt={step.alt} className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;