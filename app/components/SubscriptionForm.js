'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './SubscriptionForm.module.css'
import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image'

export default function SubscriptionForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setShowSuccessModal(true)
      setEmail('') // Clear the input
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.subscriptionBox}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={loading}
        >
          {loading ? 'SENDING...' : 'NOTIFY ME →'}
        </button>
      </form>

      <Modal 
        show={showSuccessModal} 
        onHide={handleCloseSuccessModal} 
        centered 
        dialogClassName={styles.customModal}
      >
        <Modal.Body>
          <div className={styles.successContainer}>
            <div className={styles.closemodal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleCloseSuccessModal} style={{cursor:'pointer'}}>
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
            <p className={styles.successMessage}>We will notify you very soon!</p>
            <Button 
              className={styles.closeButton} 
              onClick={handleCloseSuccessModal}
            >
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
} 