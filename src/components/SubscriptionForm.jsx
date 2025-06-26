import React, { useState, useEffect } from 'react';
import styles from '../styles/subscriptionForm.module.css';

const SubscriptionForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '+971',
        email: '',
        whatsapp: '+971',
        subscriptionType: 'individual',
        businessName: '',
        businessPhone: '+971',
        businessEmail: '',
        emirate: ''
    });

    // Close the modal when Escape key is pressed
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);

        // Prevent scrolling of the body when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // If modal is not open, don't render anything
    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, such as sending the data to an API
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
        onClose();
    };

    const handlePhoneChange = (e) => {
        const { name, value } = e.target;

        // Ensure phone numbers always start with +971
        if (value.startsWith('+971')) {
            setFormData({ ...formData, [name]: value });
        } else if (value === '+97') {
            setFormData({ ...formData, [name]: '+971' });
        } else if (value === '+9' || value === '+' || value === '') {
            setFormData({ ...formData, [name]: '+971' });
        } else {
            // If someone pastes a number without the prefix, add it
            if (!value.startsWith('+')) {
                setFormData({ ...formData, [name]: '+971' + value.replace(/\D/g, '') });
            } else {
                setFormData({ ...formData, [name]: value });
            }
        }
    };

    // Close when clicking the overlay (the area around the modal)
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close form">
                    &times;
                </button>
                <div className={styles.decorElements}>
                    <div className={styles.decorCircle}></div>
                    <div className={styles.decorSquare}></div>
                    <div className={styles.decorTriangle}></div>
                </div>
                <h2 className={styles.modalTitle}>Join Waitlist</h2>

                <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            required
                            placeholder="+971501234567"
                            pattern="\\+971[0-9]{9}"
                            title="Please enter a valid UAE phone number starting with +971"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handlePhoneChange}
                            required
                            placeholder="+971501234567"
                            pattern="\\+971[0-9]{9}"
                            title="Please enter a valid UAE WhatsApp number starting with +971"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Subscription Type</label>
                        <div className={styles.radioGroup}>
                            <label className={`${styles.radioLabel} ${formData.subscriptionType === 'individual' ? styles.selected : ''}`}>
                                <input
                                    type="radio"
                                    name="subscriptionType"
                                    value="individual"
                                    checked={formData.subscriptionType === 'individual'}
                                    onChange={handleChange}
                                />
                                Individual
                            </label>
                            <label className={`${styles.radioLabel} ${formData.subscriptionType === 'business' ? styles.selected : ''}`}>
                                <input
                                    type="radio"
                                    name="subscriptionType"
                                    value="business"
                                    checked={formData.subscriptionType === 'business'}
                                    onChange={handleChange}
                                />
                                Business
                            </label>
                        </div>
                    </div>

                    {formData.subscriptionType === 'business' && (
                        <div className={styles.businessSection}>
                            <div className={styles.formGroup}>
                                <label htmlFor="businessName">Business Name</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required={formData.subscriptionType === 'business'}
                                    placeholder="Your business name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="businessPhone">Business Phone</label>
                                <input
                                    type="tel"
                                    id="businessPhone"
                                    name="businessPhone"
                                    value={formData.businessPhone}
                                    onChange={handlePhoneChange}
                                    required={formData.subscriptionType === 'business'}
                                    placeholder="+97121234567"
                                    pattern="\\+971[0-9]{9}"
                                    title="Please enter a valid UAE business phone number starting with +971"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="businessEmail">Business Email</label>
                                <input
                                    type="email"
                                    id="businessEmail"
                                    name="businessEmail"
                                    value={formData.businessEmail}
                                    onChange={handleChange}
                                    required={formData.subscriptionType === 'business'}
                                    placeholder="business@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="emirate">Emirate</label>
                                <select
                                    id="emirate"
                                    name="emirate"
                                    value={formData.emirate}
                                    onChange={handleChange}
                                    required={formData.subscriptionType === 'business'}
                                >
                                    <option value="">Select an Emirate</option>
                                    <option value="Abu Dhabi">Abu Dhabi</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Sharjah">Sharjah</option>
                                    <option value="Ajman">Ajman</option>
                                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                                    <option value="Fujairah">Fujairah</option>
                                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionForm;
