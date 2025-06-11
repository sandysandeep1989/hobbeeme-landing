import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import styles from './ListingModal.module.css';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomDropdown from '../classes/course-detail/CustomDropDown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function ListingModal({ show, onHide }) {
    const [services, setServices] = useState({
        art: false,
        music: false,
        dance: false,
        cooking: false,
        fitness: false,
        wellbeing: false,
        sports: false,
        other: false
    });
    const [serviceDescriptions, setServiceDescriptions] = useState({
        art: '',
        music: '',
        dance: '',
        cooking: '',
        fitness: '',
        wellbeing: '',
        sports: '',
        other: '',
    });
    const [selectedCategory, setSelectedCategory] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        contact: '', 
        businessName: '',
        businessId: '',
        socialMediaLink: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [hasLicense, setHasLicense] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, [errors]);

    // Reset all states when modal is closed
    useEffect(() => {
        if (!show) {
            setServices({
                art: false,
                music: false,
                dance: false,
                cooking: false,
                fitness: false,
                wellbeing: false,
                sports: false,
                other: false
            });
            setServiceDescriptions({
                art: '',
                music: '',
                dance: '',
                cooking: '',
                fitness: '',
                wellbeing: '',
                sports: '',
                other: '',
            });
            setSelectedCategory('');
            setAcceptTerms(false);
            setHasLicense(false);
            setFormData({ 
                name: '', 
                email: '', 
                contact: '', 
                businessName: '',
                businessId: '',
                socialMediaLink: ''
            });
            setLoading(false);
            setSubmitted(false);
            setErrors({});
        }
    }, [show]);

    const handleCheckboxChange = (service, value) => {
        setServices(prev => ({ ...prev, [service]: value }));
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Basic required field validation
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
        if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
        if (!formData.businessId.trim()) newErrors.businessId = 'Business/Freelancer ID is required';
        if (!formData.socialMediaLink.trim()) newErrors.socialMediaLink = 'Social media link is required';
        if (!selectedCategory) newErrors.category = 'Category is required';
        if (!hasLicense) newErrors.license = 'You must confirm you hold the necessary license(s)';

        // Email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Mobile number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (formData.contact && !phoneRegex.test(formData.contact)) {
            newErrors.contact = 'Enter a valid 10-digit number';
        }

        // Service textarea validation
        Object.entries(services).forEach(([key, isChecked]) => {
            if (isChecked && !serviceDescriptions[key].trim()) {
                newErrors[`service_${key}`] = `Please describe your ${key} service`;
            }
        });

        // Terms & conditions
        if (!acceptTerms) {
            newErrors.terms = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; // Just return if there are validation errors
        }

        setLoading(true);

        const payload = {
            ...formData,
            services,
            serviceDescriptions,
            category: selectedCategory,
            hasLicense,
            acceptTerms,
            businessId: formData.businessId,
            socialMediaLink: formData.socialMediaLink
        };

        try {
            const res = await fetch('/api/send-listing-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Failed to send');
            setSubmitted(true);
            toast.success('🎉 Thank you for your submission!');
            // Close modal after showing success toast
            setTimeout(() => {
                onHide();
            }, 1500); // 1.5 second delay to show the success message
        } catch (err) {
            console.error('Send failed', err);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDescriptionChange = (service, value) => {
        setServiceDescriptions(prev => ({ ...prev, [service]: value }));
    };

    const servicePlaceholders = {
        art: 'Describe your Art & Craft services...',
        music: 'Describe your Music or Instrument classes...',
        dance: 'Describe your Dance forms or batches...',
        cooking: 'Describe your Cooking Services',
        fitness: 'Describe your Fitness Services',
        wellbeing: 'Describe your Well Being Services',
        sports: 'Describe your Sports Services',
        other: 'Describe your other Services',
    };

    return (
        <Modal show={show} onHide={onHide} centered dialogClassName={styles.customModal}>
            <Modal.Body>
                <>
                    <div className={styles.listingHeader}>
                        <div className={styles.modalTitle}>
                        <h4>Start Listing</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={onHide} style={{cursor:'pointer'}}>
                            <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit} noValidate>
                        {/* Name & Email */}
                        <Row className="mb-3">
                            <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Name</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className={styles.error}>{errors.name}</div>}
                                </Form.Group>
                            </Col>
                            <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Contact & Business Name */}
                        <Row className="mb-3">
                        <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Contact Number</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="tel"
                                        name="contact"
                                        placeholder="Contact Number"
                                        onChange={handleChange}
                                    />
                                    {errors.contact && <div className={styles.error}>{errors.contact}</div>}
                                </Form.Group>
                            </Col>
                            <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Business Name</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="text"
                                        name="businessName"
                                        placeholder="Business Name"
                                        onChange={handleChange}
                                    />
                                    {errors.businessName && <div className={styles.error}>{errors.businessName}</div>}
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Business ID & Social Media Link */}
                     

                        {/* Services Section */}
                        <Form.Group className={`mb-3 ${styles.formGroup}`}>
                            <Form.Label className={styles.formLabel}><strong>What all services you want to list with us?</strong></Form.Label>

                            {['art', 'music', 'dance', 'cooking', 'fitness', 'wellbeing', 'sports', 'other'].map((key) => (
                                <div key={key} className="mb-3">
                                    <div className={`${styles.checkboxRow} mt-2`}>
                                        <CustomCheckbox
                                            checked={services[key]}
                                            onChange={(val) => handleCheckboxChange(key, val)}
                                        />
                                        <label className={styles.formLabel}>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </label>
                                    </div>
                                    {services[key] && (
                                        <div className="d-flex flex-column">
                                            <Form.Control
                                                className={`mt-2 ${styles.formTextarea}`}
                                                as="textarea"
                                                rows={2}
                                                placeholder={servicePlaceholders[key]}
                                                value={serviceDescriptions[key]}
                                                onChange={(e) => handleDescriptionChange(key, e.target.value)}
                                            />
                                            {errors[`service_${key}`] && (
                                                <div className={`${styles.errors} mt-1`}>
                                                    {errors[`service_${key}`]}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Form.Group>

                        {/* Custom Dropdown */}
                        <Form.Group className={`mb-3 ${styles.formGroup}`}>
                            <div className="mb-4">
                                <CustomDropdown
                                    label="I am a"
                                    options={['Freelancer', 'Institute', 'Academy/Studio', 'Other']}
                                    selected={selectedCategory}
                                    onChange={setSelectedCategory}
                                />
                                {errors.category && <div className={styles.error}>{errors.category}</div>}
                            </div>
                        </Form.Group>

                        <Row className="mb-3">
                        <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Provide UAE Business/Freelancer/ID</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="text"
                                        name="businessId"
                                        placeholder="Provide Business/Freelancer/ID"
                                        onChange={handleChange}
                                    />
                                    {errors.businessId && <div className={styles.error}>{errors.businessId}</div>}
                                </Form.Group>
                            </Col>
                            <Col md = {6}>
                                <Form.Group className={styles.formGroup}>
                                    <Form.Label className={styles.formLabel}>Enter your social media link</Form.Label>
                                    <Form.Control
                                        className={styles.formInput}
                                        type="text"
                                        name="socialMediaLink"
                                        placeholder="Provide Instagram/Facebook/Link"
                                        onChange={handleChange}
                                    />
                                    {errors.socialMediaLink && <div className={styles.error}>{errors.socialMediaLink}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        

                        {/* License Checkbox */}
                        <Form.Group className={`mb-4 d-flex align-items-center ${styles.formGroup}`}>
                            <CustomCheckbox
                                checked={hasLicense}
                                onChange={() => setHasLicense(!hasLicense)}
                            />
                            <label className={`${styles.formLabel} ms-2`}>
                                I hold the necessary license/s to Teach, Host or Conduct the listed services in UAE
                            </label>
                            {errors.license && <div className={styles.error}>{errors.license}</div>}
                        </Form.Group>

                        {/* Terms & Conditions */}
                        <Form.Group className={`mb-4 d-flex align-items-center ${styles.formGroup}`}>
                            <CustomCheckbox
                                checked={acceptTerms}
                                onChange={() => setAcceptTerms(!acceptTerms)}
                            />
                            <label className={`${styles.formLabel} ms-2`}>
                                I accept <Link href="/term-and-condition" className={styles.termsLink}>Terms and Conditions</Link>
                            </label>
                            {errors.terms && <div className={styles.error}>{errors.terms}</div>}
                        </Form.Group>

                        <Button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Form>
                </>
            </Modal.Body>
            <ToastContainer position="top-right" autoClose={3000} />
        </Modal>
    );
}
