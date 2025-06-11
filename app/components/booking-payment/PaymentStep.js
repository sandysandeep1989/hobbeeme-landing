"use client"
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CustomCheckbox from "../CustomCheckbox";
import styles from './PackageStep.module.css'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentStep() {
    const [checked, setChecked] = useState(true);

    const handleCheckboxChange = (value) => {
        setChecked(value);
    };

    const bookingAmount = 2800; // Static booking price
    const [walletBalance, setWalletBalance] = useState(2480); // Start with insufficient
    const [showModal, setShowModal] = useState(false);
    const [fundInput, setFundInput] = useState('');

    const handleAddFunds = () => {
        const amount = parseFloat(fundInput);
        if (!isNaN(amount)) {
            setWalletBalance(prev => prev + amount);
            setFundInput('');
            setShowModal(false);
        }
    };
    const router = useRouter();
    const handlePayment = () => {
        // Optional: perform final payment logic here
        // Then redirect to Thank You page
        router.push('/thankyouPage');
    };
    return (
        <>
            <Container className={styles.mainSection}>
                <Row>
                    <Col md={8}>
                        <div className={styles.packageList}>
                            <div className={styles.tourInfo}>
                                <img
                                    src="/experience/aladin.png"
                                    alt="Tour"
                                    className={styles.tourImage}
                                />
                                <div>
                                    <h3>Aladdin Tour; Old Town, Souks, Tastings</h3>
                                    <p>
                                        Enjoy stress-free visit to the local markets (souks) and Explore Grand Souk,
                                        spice Souk and Gold Souk and get the best deals with Aladdin.
                                    </p>
                                </div>
                            </div>

                            <form className={styles.paymentForm}>
                                {/* Header */}
                                <div className={styles.paymentHeadWrapper}>
                                    <div className={styles.paymentHeadText}>
                                        <h2 className={styles.title}>Complete payment</h2>
                                        <p className={styles.subtitle}>
                                            We’ll contact you only if there’s any updates to your booking
                                        </p>
                                    </div>
                                    <div className={styles.cardIcons}>
                                        <img src="/experience/Visa.svg" alt="Visa" />
                                        <img src="/experience/Discover.svg" alt="Discover" />
                                        <img src="/experience/Mastercard.svg" alt="MasterCard" />
                                        <img src="/experience/Mastercard.svg" alt="Maestro" />
                                    </div>
                                </div>


                                <div className={styles.walletContainer}>
                                    <div className={styles.walletHeader}>
                                        <img src="/experience/paymentLogo.svg" alt="Hobbeeme Logo" className={styles.walletLogo} />
                                        <button type="button" className={styles.addFundsBtn} onClick={() => setShowModal(true)}>
                                            + Add Funds
                                        </button>
                                    </div>

                                    <div className={styles.walletBalanceDiv}>
                                        <span>Wallet Balance</span>
                                        <div
                                            className={
                                                walletBalance < bookingAmount
                                                    ? styles.insufficientBalance
                                                    : styles.sufficientBalance
                                            }
                                        >
                                            AED {walletBalance.toFixed(2)}
                                        </div>
                                    </div>


                                    {walletBalance < bookingAmount && (
                                        <div className={styles.insufficientFund}>Insufficient Balance</div>
                                    )}
                                </div>

                                {/* Card Details */}
                                <div className={styles.cardSection}>
                                    <label className={styles.cardLabel}>
                                        <span className={styles.bullet}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                <circle cx="6" cy="6.5" r="6" fill="#FEEA4F" />
                                                <circle cx="5.99961" cy="6.49998" r="2.4" fill="#141516" />
                                            </svg>
                                        </span>
                                        Credit/ debit card
                                    </label>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="cardNumber" className={styles.inputLabel}>Card number</label>
                                        <input type="text" id="cardNumber" className={styles.inputField} />
                                    </div>

                                    <div className={styles.formrow}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="expDate" className={styles.inputLabel}>Expiration date</label>
                                            <input type="text" id="expDate" className={styles.inputField} />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="securityCode" className={styles.inputLabel}>Security code</label>
                                            <input type="text" id="securityCode" className={styles.inputField} />
                                        </div>
                                    </div>
                                </div>
                            </form>





                            <div className={styles.consentWrapper}>
                                <CustomCheckbox checked={checked} onChange={handleCheckboxChange} />
                                <div className={styles.consentText}>

                                    <div className={styles.offerText}>
                                        I Want To Be The First To Get Exclusive Offers Through Email And Notifications!
                                    </div>

                                    <p className={styles.termsText}>
                                        By Continuing, You Acknowledge And Agree To{' '}
                                        <a href="/terms" className={styles.link}>
                                            Hobbeeme General Terms Of Use
                                        </a>{' '}
                                        And{' '}
                                        <a href="/privacy" className={styles.link}>
                                            Privacy Policy.
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.bookingSummary}>
                            <div className={styles.bookingSummaryHead}>
                                <h3>Aladdin Tour; Old Town, Souks, Tastings</h3>
                                <p className={styles.freeCancel}>Free cancellation (24hr)</p>
                            </div>



                            <div className={styles.detailRowPaid}>
                                <span className={styles.bookingLabel}>Dates</span>
                                <span className={styles.bookingText}>Friday 16 May 2025</span>
                            </div>
                            <div className={styles.detailRowPaid}>
                                <span className={styles.bookingLabel}>Time Slot</span>
                                <span className={styles.bookingText}>9:30 AM - 12:30 PM</span>
                            </div>
                            <div className={styles.detailRowPaid}>
                                <span className={styles.bookingLabel}>Quantity</span>
                                <span className={styles.bookingText}>Person x2</span>
                            </div>

                            <hr className={styles.separator} />

                            <div className={styles.detailRowPaid}>
                                <span className={styles.bookingLabel}>Subtotal:</span>
                                <span className={styles.bookingText}>AED 234</span>
                            </div>
                            <div className={styles.detailRowPaid}>
                                <span className={styles.bookingLabel}>Total Discount</span>
                                <span className={styles.discount}>-AED 345</span>
                            </div>

                            <div className={styles.totalRow}>
                                <span className={styles.totalPric}>Total Price</span>
                                <span className={styles.totalPrice}>AED 2480.00</span>
                            </div>

                            <button
                                className={`${styles.bookNowBtn} ${walletBalance < bookingAmount ? styles.disabledBtn : ''}`}
                                onClick={handlePayment}
                                disabled={walletBalance < bookingAmount}
                            >
                                CONFIRM AND PAY →
                            </button>


                        </div>

                        <div className={styles.discountBox}>
                            <div className={styles.discountHead}>Discounts</div>
                            <p className={styles.discountText}>Enter Your Promo code if available</p>
                            <div className={styles.promoWrapper}>
                                <input type="text" placeholder="Enter your promo code" className={styles.promoInput} />
                                <button className={styles.redeemBtn}>REDEEM</button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered dialogClassName={styles.addFund}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitle}>Add Funds</div>
                        <Button className={styles.cancelBtn} onClick={() => setShowModal(false) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </div>

                    <div className={styles.cardBalance}>
                        <p className={styles.modalBalanceLabel}>Available balance</p>
                        <h2 className={styles.modalBalance}>AED {walletBalance}</h2>
                    </div>



                    <label htmlFor="fundInput" className={styles.inputLabel}>Enter Amount (AED)</label>
                    <input
                        id="fundInput"
                        type="text"
                        value={fundInput}
                        onChange={(e) => setFundInput(e.target.value)}
                        className={styles.inputField}
                        min={10}
                        max={5000}
                    />
                    <div className={styles.modalNote}>Min 10 AED Max 5000 AED</div>

                    <div className={styles.quickButtons}>
                        {[100, 400, 1000].map(amount => (
                            <button
                                key={amount}
                                type="button"
                                className={styles.amountButton}
                                onClick={() => setFundInput(amount.toString())}
                            >
                                {amount} AED
                            </button>
                        ))}
                    </div>

                    <Button className={styles.saveBtn} onClick={handleAddFunds}>
                        Confirm To Pay
                    </Button>
                </div>
            </Modal>

        </>
    )
}