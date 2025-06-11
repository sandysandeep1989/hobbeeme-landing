import { Col, Container, Row } from "react-bootstrap";
import styles from './Thankyou.module.css'
import Header from "../components/header";
import Footer from "../components/footer";

export default function ThankyouPage() {
    const bookingDetails = {
        bookingId: '1109456',
        status: 'Completed',
        date: '14 May 2024',
        paymentMode: 'Credit Card',
        total: '649 AED',
      };
    return (
        <>
        <Header/>
        <div className={styles.thankyouWrapper}>
            <Container className={styles.thankyouContainer}>
                <div className={styles.thankyouContainerInner}>
                      <Row>
                    <Col md={6}>
                        <div className={styles.thankyouInfo}>
                            <h1 className={styles.title}>Thanks for your Purchase!</h1>
                            <p className={styles.subtitle}>
                                You've successfully booked “[Class/Experience Name]” — we can't wait to see you there!
                            </p>

                            <div className={styles.card}>
                                <div className={styles.bookingId}>
                                    <span>BOOKING ID</span>
                                    <span>#{bookingDetails.bookingId}</span>
                                </div>

                                <div className={styles.detailRow}>
                                    <span>Status</span>
                                    <div className={styles.success}>{bookingDetails.status}</div>
                                </div>
                                <div className={styles.detailRow}>
                                    <span>Date</span>
                                    <div>{bookingDetails.date}</div>
                                </div>
                                <div className={styles.detailRow}>
                                    <span>Payment Mode</span>
                                    <div>{bookingDetails.paymentMode}</div>
                                </div>

                                <hr className={styles.seperator}/>
                                <div className={styles.detailRow}>
                                    <span>Total</span>
                                    <div className={styles.date}>{bookingDetails.total}</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.casbackwrapping}>
                            <h3>Win up to 30 AED Cashback!</h3>
                            <p>Claim your exclusive cashback reward by scratching the card below — 
                            only available in our mobile app.</p>

                            <div className={styles.cashbackBox}>
                                <div className={styles.cashbackBoxText}>You Won</div>
                                <div className={styles.cashbackPercent}>3% CASHBACK</div>
                                <div className={styles.cashbackInstruction}>Click & Scan QR Code to claim your reward </div>
                            </div>
            
                        </div>

                        <button className={styles.downloadButton}>DOWNLOAD APP TO CLAIM YOUR REWARD</button>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                    <div className={styles.imagewrappig}>
                        <img src='/experience/mobileApp.png'/>
                    </div>
                    <div className={styles.addDownloadWrapping}>
                        <div className={styles.appButton}>
                            <img src='/experience/applestore.svg'/>
                            <div className={styles.downloadText}>
                                <h5>Download on the</h5>
                                <p>App Store</p>
                            </div>
                        </div>
                        <div className={styles.appButton}>
                            <img src='/experience/playStore.svg'/>
                            <div className={styles.downloadText}>
                                <h5>Get it on</h5>
                                <p>Play Store</p>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>


                </div>
              
            </Container>
        </div>
        <Footer/>
        </>
    )
}