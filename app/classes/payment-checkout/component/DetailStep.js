import { useState } from 'react';
import styles from './PaymentCheck.module.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import CustomCheckbox from '@/app/components/CustomCheckbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateInput from '@/app/components/custom-daypicker/DateInput';
import Dropdown from '@/app/components/dropdown/Dropdown';

export default function DetailStep({ currentStep, setCurrentStep, maxMembers }) {
  const [showModal, setShowModal] = useState(false);



  const [members, setMembers] = useState([
    { id: 1, name: 'Ethan Brown', email: 'Ethan.Brown@Example.Com', role: 'Partner', gender: 'Male' },
    { id: 2, name: 'Sophia Martinez', email: 'Sophia.Martinez@Example.Com', role: 'Daughter', gender: 'Female' },
    { id: 3, name: 'Liam Thompson', email: 'Liam.Thompson@Example.Com', role: 'Father', gender: 'Male' },
    { id: 4, name: 'Ava Wilson', email: 'Ava.Wilson@Example.Com', role: 'Female', gender: 'Female' },
    { id: 5, name: 'Olivia Johnson', email: 'Olivia.Johnson@Example.Com', role: 'Female', gender: 'Female' },
    { id: 6, name: 'Mason Lee', email: 'Mason.Lee@Example.Com', role: 'Male', gender: 'Male' }
  ]);

  const [selected, setSelected] = useState([]);

  const [newMember, setNewMember] = useState({ name: '', email: '', role: '', dob: '', gender: '' });

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      // Member is already selected, remove them
      setSelected(selected.filter(selectedId => selectedId !== id));
    } else {
      // Member is not selected, check if limit is reached
      if (selected.length < maxMembers) {
        setSelected([...selected, id]);
      } else {
        toast.error(`You can select a maximum of ${maxMembers} members.`);
      }
    }
  };

  const handleModal = () => setShowModal(!showModal);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember.name && newMember.email && newMember.role) {
      const newId = members.length + 1;
      setMembers([...members, { id: newId, ...newMember }]);
      setNewMember({ name: '', email: '', role: '', dob: '' });
      handleModal();
    }
  };

  const handleStepClick = (stepId) => {
    if (stepId > currentStep) {
      setCurrentStep(stepId);
    }
  };

  const nextStep = 2;


  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };

  const relationOption = [
    {label: 'Father', value: 'Father'},
    {label: 'Mother', value: 'Mother'},
    {label: 'Sibling', value: 'Sibling'},
    {label: 'Other', value: 'Other'}
  ]

  const handleRelationSelect = (value) => {
    setNewMember(prev => ({...prev, relation:value}));
  } 

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ];

  const handleGenderSelect = (value) => {
    setNewMember(prev => ({ ...prev, gender: value }));
  };

  return (
    <>
      <div>
        <Container className={styles.mainSection}>
          <Row>
            <Col md={8}>
              <div className={styles.packageList}>
                <div className={styles.orderInfo}>Order Info</div>
                <div className={styles.tourInfo}>
                  <img
                    src="/experience/aladin.png"
                    alt="Tour"
                    className={styles.tourImage}
                  />
                  <div>
                    <h3>Kathak Grace in Motion<br />
                      from  Tail Performing Arts</h3>
                    <p>
                      Flexible Dates <br />
                      Batch 1: Wednesday, 5-6 pm; Batch 2: Friday, 5-6 pm, 4 Sessions (1 hour each)
                    </p>
                  </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.keyClassDetails}>
                  <h3>Key Class Details</h3>
                  <ul>
                    <li>
                      Class Format: Group class with a joint/online (JT) format, offering both in-person and virtual participation.
                    </li>
                    <li>Schedule: Confirm your preferred batch: Batch 1 (Wednesdays, 5-6 pm) or Batch 2 (Fridays, 5-6 pm), with 4 sessions total.</li>
                    <li>Requirements: Intermediate Kathak experience is required; please wear comfortable dance attire and bring ghungroo (ankle bells) if you have them.</li>
                    <li>Cancellation Policy: Cancellations made at least 48 hours before the first session are eligible for a full refund.</li>

                  </ul>
                </div>
                <div className={styles.divider}></div>

                <h2 className={styles.cardsHeading}>Hi Arpit, who's attending this Event?</h2>
                <div className={styles.memberGrid}>
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className={`${styles.memberItem}`}
                      onClick={() => handleSelect(member.id)}
                    >
                      <div
                        className={`${styles.card} ${selected.includes(member.id) ? styles.selectedCard : ''
                          }`}
                      >
                        <div className={styles.cardFlex}>
                          <div>{selected.includes(member.id) && (
                            <span className={styles.checkIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <mask
                                  id="mask0_3671_8756"
                                  mask-type="alpha"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                  height="20"
                                >
                                  <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_3671_8756)">
                                  <path
                                    d="M7.5 17.5C6.11111 17.5 4.93056 17.0139 3.95833 16.0417C2.98611 15.0694 2.5 13.8889 2.5 12.5V7.5C2.5 6.11111 2.98611 4.93056 3.95833 3.95833C4.93056 2.98611 6.11111 2.5 7.5 2.5H12.5C13.8889 2.5 15.0694 2.98611 16.0417 3.95833C17.0139 4.93056 17.5 6.11111 17.5 7.5V12.5C17.5 13.8889 17.0139 15.0694 16.0417 16.0417C15.0694 17.0139 13.8889 17.5 12.5 17.5H7.5ZM9.16667 11L7.91667 9.75C7.76389 9.59722 7.56944 9.52083 7.33333 9.52083C7.09722 9.52083 6.90278 9.59722 6.75 9.75C6.59722 9.90278 6.52083 10.0972 6.52083 10.3333C6.52083 10.5694 6.59722 10.7639 6.75 10.9167L8.58333 12.75C8.75 12.9167 8.94444 13 9.16667 13C9.38889 13 9.58333 12.9167 9.75 12.75L13.5833 8.91667C13.7361 8.76389 13.8125 8.56944 13.8125 8.33333C13.8125 8.09722 13.7361 7.90278 13.5833 7.75C13.4306 7.59722 13.2361 7.52083 13 7.52083C12.7639 7.52083 12.5694 7.59722 12.4167 7.75L9.16667 11Z"
                                    fill="#FEEA4F"
                                  />
                                </g>
                              </svg>
                            </span>
                          )}</div>

                          <div> <h5>{member.name}</h5>
                            <p>{member.email}</p></div>


                          <span className={styles.roleTag}>{member.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className={styles.memberItem1}>
                    <Button className={styles.addButton} onClick={handleModal}>
                      + Add New Member
                    </Button>
                  </div>
                </div>

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
                  <span>Total Price</span>
                  <span className={styles.totalPrice}>AED 2480.00</span>
                </div>

                <button className={styles.bookNowBtn} onClick={() => handleStepClick(nextStep)}>
                  GO TO PAYMENT →
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

        <Modal show={showModal} onHide={handleModal} centered dialogClassName={styles.customModal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>Add a Member</div>
            <Button className={styles.cancelBtn} onClick={handleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
          <Modal.Body className={styles.modalBody}>
            <Form onSubmit={handleAddMember}>
              <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Name</Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={newMember.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className={styles.formGroup}>
                <DateInput
                  value={newMember.dob}
                  onChange={(date) => setNewMember((prev) => ({ ...prev, dob: date }))}
                />
              </Form.Group>
              <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Relation</Form.Label>
                <Dropdown 
                  label="Select Relation" 
                  options={relationOption} 
                  onSelect={handleRelationSelect} 
                />
              </Form.Group>
           

              <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Email Address</Form.Label>
                {/* <DateInput /> */}
                <Form.Control
                  className={styles.formControl}
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={newMember.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Role</Form.Label>
                <Form.Control
                  className={styles.formControl}
                  type="text"
                  placeholder="Enter Role"
                  name="role"
                  value={newMember.role}
                  onChange={handleInputChange}
                />
              </Form.Group>


              <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Gender</Form.Label>
                <Dropdown 
                  label="Select gender" 
                  options={genderOptions} 
                  onSelect={handleGenderSelect} 
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <div className={styles.modalFooter}>

            <Button type="button" className={styles.saveBtn} onClick={handleAddMember}>Save Member</Button>
          </div>
        </div>
      </Modal>
      </div>
      <ToastContainer />
    </>
  )
}