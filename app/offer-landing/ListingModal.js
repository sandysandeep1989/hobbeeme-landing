import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import styles from './ListingModal.module.css';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomDropdown from '../classes/course-detail/CustomDropDown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ListingModal({ show, onHide }) {
    const router = useRouter();
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
        const stateData = localStorage.getItem('listingFormState');
        if (stateData) {
            const state = JSON.parse(stateData);

            setFormData({
                name: state.formData?.name || '', 
                email: state.formData?.email || '', 
                contact: state.formData?.contact || '', 
                businessName: state.formData?.businessName || '',
                businessId: state.formData?.businessId || '',
                socialMediaLink: state.formData?.socialMediaLink || ''
            });

            
            setServiceDescriptions({
                art: state?.serviceDescriptions?.art || '',
                music: state?.serviceDescriptions?.music || '',
                dance: state?.serviceDescriptions?.dance || '',
                cooking: state?.serviceDescriptions?.cooking || '',
                fitness: state?.serviceDescriptions?.fitness || '',
                wellbeing: state?.serviceDescriptions?.wellbeing || '',
                sports: state?.serviceDescriptions?.sports || '',
                other: state?.serviceDescriptions?.other || ''
            });

            
            setServices({
                art: state.services?.art || false,
                music: state.services?.music || false,
                dance: state.services?.dance || false,
                cooking: state.services?.cooking || false,
                fitness: state.services?.fitness || false,
                wellbeing: state.services?.wellbeing || false,
                sports: state.services?.sports || false,
                other: state.services?.other || false
            });

            // Restore checkbox values
            setAcceptTerms(state.acceptTerms || false);
            setHasLicense(state.hasLicense || false);
            setSelectedCategory(state.selectedCategory || '');
        }
    }, [show]);

    // Save form state to localStorage whenever it changes
    useEffect(() => {
        if (show) {
            const formState = {
                services,
                serviceDescriptions,
                selectedCategory,
                acceptTerms,
                formData,
                hasLicense,
                isModalOpen: true
            };
            localStorage.setItem('listingFormState', JSON.stringify(formState));
        }
    }, [services, serviceDescriptions, selectedCategory, acceptTerms, formData, hasLicense, show]);

    // Handle T&C link click
    const handleTCLinkClick = (e) => {
        e.preventDefault();
        const formState = {
            services,
            serviceDescriptions,
            selectedCategory,
            acceptTerms,
            formData,
            hasLicense,
            isModalOpen: true,
            isNavigatingToTC: true, 
        };
        localStorage.setItem('listingFormState', JSON.stringify(formState));
        localStorage.setItem("cameFromModal", "true");
        router.push('/term-and-condition');
    };


    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 5000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        if (!show) {
            const savedState = localStorage.getItem('listingFormState');
            const cameFromTC = savedState && JSON.parse(savedState).isNavigatingToTC;
    
            if (!cameFromTC) {
                setServices({
                    art: false, music: false, dance: false,
                    cooking: false, fitness: false, wellbeing: false,
                    sports: false, other: false
                });
                setServiceDescriptions({
                    art: '', music: '', dance: '',
                    cooking: '', fitness: '', wellbeing: '',
                    sports: '', other: '',
                });
                setSelectedCategory('');
                setAcceptTerms(false);
                setHasLicense(false);
                setFormData({ 
                    name: '', email: '', contact: '', 
                    businessName: '', businessId: '', socialMediaLink: ''
                });
                setLoading(false);
                setSubmitted(false);
                setErrors({});
            }
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
        const phoneRegex = /^\d+$/;
        if (formData.contact && !phoneRegex.test(formData.contact)) {
            newErrors.contact = 'Contact number must contain only digits';
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
            // Show validation errors as toast messages
            Object.values(newErrors).forEach((msg, i) => {
                setTimeout(() => toast.error(msg), i * 100);
            });
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

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to submit form');
            }
            
            // Show success toast
            toast.success('Form submitted successfully');
            setSubmitted(true);
            
            // Clear localStorage after successful submission
            localStorage.removeItem('listingFormState');
            
        } catch (err) {
            console.error('Send failed', err);
            toast.error(err.message || 'Something went wrong. Please try again.');
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
                {submitted ? (
                    <div className={styles.successContainer}>
                        <div className={styles.closemodal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={onHide} style={{cursor:'pointer'}}>
                                    <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                        </div>
                        <div className={styles.successGif}>
                            <Image
                                src="/thankyou.gif"
                                alt="Success"
                                width={100}
                                height={100}
                                className={styles.successImage}
                            />
                        </div>
                        <h3 className={styles.successTitle}>Thank You!</h3>
                        <p className={styles.successMessage}>Your form has been submitted successfully</p>
                        <p className={styles.greetings}>We appreiciate you taking the time to fill out our form. We've received your submission and will process it promptly</p>
                        <Button 
                            className={styles.closeButton} 
                            onClick={onHide}
                        >
                            Close
                        </Button>
                    </div>
                ) : (
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

                            <div className={styles.listinForm}>
                            <Row className="mb-3">
                                <Col md = {6}>
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label className={styles.formLabel}>Name</Form.Label>
                                        <Form.Control
                                            className={styles.formInput}
                                            type="text"
                                            name="name"
                                            value={formData.name}
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
                                            value={formData.email}
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
                                            value={formData.contact}
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
                                            value={formData.businessName}
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
                                                checked={services[key] || false}
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
                                        options={['Freelancer', 'Academy/institute/studio', 'Other']}
                                        selected={selectedCategory}
                                        onChange={setSelectedCategory}
                                    />
                                   
                                </div>
                            </Form.Group>
                            {errors.category && <div className={styles.error}>{errors.category}</div>}

                            
                            <Col className='mb-3'>
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label className={styles.formLabel}>Provide UAE Business/Freelancer/license number</Form.Label>
                                        <Form.Control
                                            className={styles.formInput}
                                            type="text"
                                            name="businessId"
                                            value={formData.businessId}
                                            placeholder="Provide Business/Freelancer/license number"
                                            onChange={handleChange}
                                        />
                                        
                                    </Form.Group>
                                    {errors.businessId && <div className={styles.error}>{errors.businessId}</div>}
                                </Col>
                                <Col className='mb-3'>
                                    <Form.Group className={styles.formGroup}>
                                        <Form.Label className={styles.formLabel}>Enter your social media link</Form.Label>
                                        <Form.Control
                                            className={styles.formInput}
                                            type="text"
                                            name="socialMediaLink"
                                            value={formData.socialMediaLink}
                                            placeholder="Provide Instagram/Facebook/Link"
                                            onChange={handleChange}
                                        />
                                        {errors.socialMediaLink && <div className={styles.error}>{errors.socialMediaLink}</div>}
                                    </Form.Group>
                                </Col>
                           
                            

                            {/* Cancellation Policy Dropdown */}
                            {/* <Form.Group className={`mb-3 ${styles.formGroup}`}>
                                <div className="mb-4">
                                    <CustomDropdown
                                        label="Free Cancellation Policy"
                                        options={[
                                            'Free cancellation before 24 hours',
                                            'Free cancellation before 48 hours',
                                            'Free cancellation before 72 hours',
                                        ]}
                                        selected={cancellationPolicy}
                                        onChange={setCancellationPolicy}
                                    />
                                    {errors.cancellationPolicy && <div className={styles.error}>{errors.cancellationPolicy}</div>}
                                </div>
                            </Form.Group> */}

                            {/* License Checkbox */}
                            <Form.Group className={`mb-4 d-flex align-items-center ${styles.formGroup}`}>
                                <CustomCheckbox
                                    checked={hasLicense}
                                    onChange={() => setHasLicense(!hasLicense)}
                                />
                                <label className={`${styles.formLabel} ms-2`}>
                                    I hold the necessary license/s to Teach, Host or Conduct the listed services in UAE
                                </label>
                                {errors.license && <div className={styles.errordif}>{errors.license}</div>}
                            </Form.Group>
                           

                            {/* Terms & Conditions */}
                            <Form.Group className={`mb-4 d-flex align-items-center ${styles.formGroup}`}>
                                <CustomCheckbox
                                    checked={acceptTerms}
                                    onChange={() => setAcceptTerms(!acceptTerms)}
                                />
                                <label className={`${styles.formLabel} ms-2`}>
                                    I accept the Collaboration Model as stated in the{' '}
                                    <span 
                                        className={styles.termsLink}
                                        onClick={handleTCLinkClick}
                                    >
                                        T&C
                                    </span>
                                </label>
                                {errors.terms && <div className={styles.errordif}>{errors.terms}</div>}
                            </Form.Group>
                            
                            </div>
                           

                            <Button type="submit" className={styles.submitButton} disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </Form>
                    </>
                )}
            </Modal.Body>
            <ToastContainer position="top-right" autoClose={3000} />
        </Modal>
    );
}
