import React, { useState } from 'react';
import styles from '../styles/faqSection.module.css';

const faqs = [
    {
        question: "How do I subscribe to Designvault?",
        answer: <p>Easy peasy! Just click the ‘Subscribe’ button, choose your plan, and you’re all set. Welcome to the Designvault family!</p>,
    },
    {
        question: "How do I request a design?",
        answer: <p>Simply log in to your account, hit ‘Request Design’, and tell us what you need. We’ll take it from there!</p>,
    },
    {
        question: "What if I need revisions?",
        answer: <p>No worries! We offer unlimited revisions. Just let us know what tweaks you need, and we’ll make it perfect.</p>,
    },
    {
        question: "How fast can I get my design?",
        answer: <p>Fast! We deliver most designs within 2 days. Speedy service without sacrificing quality—that’s our promise.</p>,
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: <p>Absolutely. No strings attached! You can cancel anytime if you decide Designvault isn’t the right fit for you (but we think you’ll love it!).</p>,
    },
];

const DownArrowIcon = ({ open }) => (
    <svg
        className={styles.arrow}
        style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = idx => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <section className={styles.section} id='faq'>
            <h2 className={styles.heading} data-aos="fade-up" data-aos-duration="800" data-aos-offset="20" data-aos-delay="200">FAQ</h2>
            <div className={styles.faqList} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="20">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={styles.faqItem}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={300 + (idx * 100)}
                        data-aos-offset="20"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <button
                            className={styles.question}
                            onClick={() => handleToggle(idx)}
                            aria-expanded={openIndex === idx}
                        >
                            <span className={openIndex === idx ? styles.open : ''}>{faq.question}</span>
                            <DownArrowIcon open={openIndex === idx} />
                        </button>
                        {openIndex === idx && (
                            <div className={openIndex === idx ? `${styles.answer} ${styles.answerOpen}` : `${styles.answer} ${styles.answerClosed}`}>{faq.answer}</div>
                        )}
                        <hr className={openIndex === idx ? `${styles.divider} ${styles.dividerOpen}` : styles.divider} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection; 