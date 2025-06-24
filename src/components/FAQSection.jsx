import React, { useState } from 'react';
import styles from '../styles/faqSection.module.css';

const faqs = [
    {
        question: "Why wouldn't I just hire a full-time designer?",
        answer: (
            <>
                <p>Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.</p>
                <p>With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.</p>
            </>
        ),
    },
    {
        question: "What is a project?",
        answer: <p>A project is a website that you build in Webflow. You can publish projects to a webflow.io staging subdomain for free, export the code on a paid plan, or add a site plan to connect your custom domain and unlock hosting features.</p>,
    },
    {
        question: "What can I white label?",
        answer: <p>Pro accounts can add their own logo to Client Billing forms and the Editor. Pro accounts can also remove references to Webflow in the source code and form submission emails, and hide the Webflow badge from their staging sites.</p>,
    },
    {
        question: "How much traffic can the hosting handle?",
        answer: <p>Webflow hosting scales automatically to handle millions of concurrent visits. All site plans serve sites through our Amazon's Cloudfront CDN and accelerated using Fastly, loading sites in milliseconds.</p>,
    },
    {
        question: "What kind of support does Webflow provide?",
        answer: <p>We offer fast email support to paid accounts and prioritized help for team accounts. Community support (forum.webflow.com) is available to free accounts.</p>,
    },
    {
        question: "How long does it take to learn Webflow?",
        answer: <p>If you're new to building websites, our video tutorials will get up and running quickly. If you already know concepts behind CSS and the box model, you will feel at home in Webflow.</p>,
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
        <section className={styles.section}>
            <h2 className={styles.heading}>FAQ</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, idx) => (
                    <div key={idx} className={styles.faqItem}>
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