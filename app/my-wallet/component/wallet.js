import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './wallet.module.css';

const Wallet = () => {
  const [show, setShow] = useState(false);
  const [redeemed, setRedeemed] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleRedeem = () => {
    // Normally, you'd validate the code here
    setRedeemed(true);
  };

  const handleCancel = () => {
    setRedeemed(false);
    handleClose();
  };

  const transactions = [
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '850',
      status: 'Paid',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '750',
      status: 'Failed',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Refunded',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Paid',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Paid',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Failed',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Failed',
    },
    {
      id: 'TXN-101',
      date: 'May 10, 2025',
      type: 'Purchase',
      description: 'Yoga Class: Morning Flow',
      amount: '75.00',
      status: 'Paid',
    },
  ];

  return (


    <div className={`${styles.accountPageSavedCol} ${styles.accountPage}`}>

      <div className={styles.walletWrapper}>
        <div className={styles.walletHeader}>
          <h1>My Wallet</h1>
          <p>Manage your funds, track transactions, and stay in control of your earnings.</p>
        </div>

        <div className={styles.walletBalanceBox}>
          <div>

            <div className={styles.walletBalanceWithEye} > <p>Wallet Balances</p> <img src='./eye-disable.svg' alt='disable eye' /></div>
            <h3>AED 456</h3>
          </div>
          <div className={styles.walletActions}>
            <button className={styles.addFunds}>+ Add Funds</button>
            <button className={styles.redeemBtn} onClick={() => setShow(true)}>
              Redeem gift card
            </button>
          </div>
        </div>

        <div className={styles.transactionSection}>
          <h3>Transactions</h3>
          <p>Access and download your past invoices</p>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.theadWrapper}>
                <tr className={styles.headerRow}>
                  <th className={styles.th}>Transaction ID</th>
                  <th className={styles.th}>Date</th>
                  <th className={styles.th}>Type</th>
                  <th className={styles.th}>Description</th>
                  <th className={styles.th}>Amount (AED)</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className={styles.row}>
                    <td className={styles.td}>{txn.id}</td>
                    <td className={styles.td}>{txn.date}</td>
                    <td className={styles.td}>{txn.type}</td>
                    <td className={styles.td}>{txn.description}</td>
                    <td className={styles.td}>{txn.amount}</td>
                    <td className={styles.td}>
                      <span className={`${styles.status} ${styles[txn.status.toLowerCase()]}`}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* this is comy code ----------- */}
          {/* <div className={styleCancell.containerr}>
      <table className={styleCancell.table}>
        <thead className={styleCancell.theadWrapper}>
          <tr className={styleCancell.headerRow}>
            <th className={styleCancell.th}>Session</th>
            <th className={styleCancell.th}>Date</th>
            <th className={`${styleCancell.th} ${styleCancell.textRight}`}>Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((row, index) => (
            <tr key={index} className={styleCancell.row}>
              <td className={styleCancell.td}>{row.session}</td>
              <td className={styleCancell.td}>{row.date}</td>
              <td className={`${styleCancell.td} ${styleCancell.textRight}`}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div> */}
          {/* ------------------ */}
        </div>
      </div>

      <Modal show={show} onHide={handleCancel} centered size="md" className={styles.modalContainer}>
        <Modal.Body className={styles.modalBody}>
          {!redeemed ? (
            <>
              <div className={styles.headerSection}>
                <div className={styles.giftCardHeader}>GIFT
                  CARD <img src='/giftLogo.svg' alt='' /></div>
                <img src="/giftCard.png/" alt="Gift Card" className={styles.bannerImage} />
              </div>
              <div className={styles.redeemSection}>
                <h5 className={styles.title}>REDEEM GIFT CARD</h5>
                <Form.Group>
                  <Form.Label className={styles.label}>Enter your gift card code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className={styles.input}
                  />
                  <Form.Text className={styles.subtext}>
                    Enter the 16-digit code from your gift card
                  </Form.Text>
                </Form.Group>
                <div className={styles.buttonRow}>
                  <Button variant="outline-light" onClick={handleCancel} className={styles.cancelBtn}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleRedeem} className={styles.redeemBtn}>
                    Redeem
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.successSection}>
              <h5 className={styles.successTitle}>GIFT CARD REDEEMED!</h5>
              <p>Your wallet has been credited with AED 2000.</p>
              <div className={styles.balanceRow}>
                <span>Current Wallet Balance</span>
                <span className={styles.balanceAmount}>AED 456</span>
              </div>
              <Button className={styles.viewWalletBtn}>View Wallet</Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

    </div>







  );
};

export default Wallet;




