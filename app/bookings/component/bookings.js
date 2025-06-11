'use client'
import { useState } from 'react'
import styles from '@/app/personal-information/component/account.module.css'
import Image from 'next/image';
import style from './booking.module.css'
import { Modal } from 'react-bootstrap';
import { CancellationDetails } from './CancellationDetails'
import CircularProgress from './Progress';
import { ListFilter, ChevronDown } from 'lucide-react';
import CusDropDown from './CusDropDown'






const EnrolmentsData = [
  {
    "courseId": "#CL8901",
    "title": "Kathak Sessions",
    "organization": "Taal performing arts",
    "status": "Upcoming",
    "statusColor": "#6C4DFF",
    "date": "May 12, 2025",
    "time": "5:00 PM to 6:30 PM",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",
    "venue": "Noida GB Nagar"
  },
  {
    "courseId": "#CL8902",
    "title": "Kathak Sessions",
    "organization": "Taal performing arts",
    "status": "Cancelled",
    "statusColor": "#F04438",
    "date": "May 12, 2025",
    "time": "5:00 PM to 6:30 PM",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",
    "venue": "Noida GB Nagar"
  },
  {
    "courseId": "#CL8903",
    "title": "Kathak Sessions",
    "organization": "Taal performing arts",
    "status": "Upcoming",
    "statusColor": "#6C4DFF",
    "date": "May 12, 2025",
    "time": "5:00 PM to 6:30 PM",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",
    "venue": "Noida GB Nagar"
  }
];


const BookingsData = [
  {
    "courseId": "#CL8901",
    "title": "Kathak Sessions",
    "organization": "Emerald Bay Sunset  Haven",
    "status": "Upcoming",
    "statusColor": "#6C4DFF",
    "date": "May 12, 2025",
    "time": "6:30 PM",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",
    "venue": "Noida GB Nagar"
  },
  {
    "courseId": "#CL8901",
    "title": "Kathak Sessions",
    "organization": "Emerald Bay Sunset  Haven",
    "status": "Cancelled",
    "statusColor": "#F04438",
    "date": "May 12, 2025",
    "time": "6:30 PM",
    "venue": "Noida GB Nagar",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",

  },
  {
    "courseId": "#CL8901",
    "title": "Kathak Sessions",
    "organization": "Emerald Bay Sunset  Haven",
    "status": "Upcoming",
    "statusColor": "#6C4DFF",
    "date": "May 12, 2025",
    "time": "6:30 PM",
    "completed": 10,
    "total": 15,
    "image": "enrollement-pic.png",
    "venue": "Noida GB Nagar"
  }
];




export const MyBookingsPage = () => {

  // const [openDropdown, setOpenDropdown] = useState(null);
  const [classType, setClassType] = useState('All');



  const [showModal, setShowModal] = useState(false);
  const [selectedQR, setSelectedQR] = useState(null);
  const [selectedCancellation, setSelectedCancellation] = useState(null);

  const handleShowQR = (enrolment) => {
    setSelectedQR(enrolment);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };



  const [likedCards, setLikedCards] = useState({});


  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };


  const [tab, setTab] = useState('Enrolments');

  const handleTab = (data) => {
    setTab(data);
  }

  const handleOnCancelledClick = (enrolments) => {
    setSelectedCancellation(enrolments);

  };

  const handleBackToBookings = () => {

  }



  return (
    // mainContent

    <div className={`${styles.accountPageBokCol} ${styles.accountPage}`}>


      {selectedCancellation ? (
        <CancellationDetails
          booking={selectedCancellation}
          onBack={handleBackToBookings}
        />


      ) : (


        <div className={`${styles.accountPageBokCol}`}>



          <h1>My Bookings </h1>
          <div className={style.tabsflex}>
            {/* <div className={styles.tabs}>
            <button className={tab === 'Enrolments' ? styles.active : ''} onClick={()=>{handleTab('Enrolments')}}>Enrolments</button>  
            <button className={tab === 'Bookings' ? styles.active : ''} onClick={()=>{handleTab('Bookings')}}>Bookings</button>
            </div> */}

            <div className={styles.tabs}>
              <div className={`${styles.slider} ${tab === 'Enrolments' ? styles.left : styles.right}`}></div>
              <button onClick={() => handleTab('Enrolments')} className={tab === 'Enrolments' ? styles.active : ''}>Enrolments</button>
              <button onClick={() => handleTab('Bookings')} className={tab === 'Bookings' ? styles.active : ''}>Bookings</button>
            </div>





            <div>
              <CusDropDown
                options={['All', 'One', 'Two']}
                selected={classType}
                onChange={setClassType} />
            </div>


          </div>


          {tab === 'Enrolments' ? (

            <div>

              {/* --------------for desktop------------- */}

              <div className={` ${style.cardWeb}`}>
                {EnrolmentsData.map((enrolments, index) => (
                  <div className={` p-3 ${style.cardWrapper}`} key={index} onClick={() => enrolments.status === 'Cancelled' ? handleOnCancelledClick(enrolments) : null}>

                    <div className={`${style.enrolmentRow} `}>

                      <div className={style.eritem1}>
                        <div className={`img-fluid rounded ${style.imageDiv}`}><img src={enrolments.image} alt={enrolments.title} className={`img-fluid rounded ${style.image}`} /> </div>

                      </div>

                      <div className={style.eritem2}>
                        <small className={style.coursId}>Course ID: #{enrolments.courseId}</small>
                        <div>

                          <h5 className={`mb-1 ${style.cardTitle}}`}>{enrolments.title}</h5>
                          <p className={` mb-1 ${style.coursName}`}>By {enrolments.organization}</p>

                        </div>
                        <div>
                          <p className={` mb-1 ${style.upCommingCls}`}>Upcoming Class</p>
                          <p className={` mb-0 ${style.datefrom}`}>{enrolments.date}, from {enrolments.time}</p>

                        </div>
                      </div>

                      <div className={style.eritem3}>

                        <span
                          className={`badge ${style.classStatus} ${enrolments.status === 'Upcoming' ? style.upCommingBg : style.cancelBg
                            } mb-2`}
                        >
                          {enrolments.status}
                        </span>


                        <div className={` ${style.qrBox}`} onClick={() => handleShowQR(enrolments)}>
                          <img src='./qrCodeIcon.svg' alt='QR code icon' />

                          <span>Show Qr to Mark attendance</span>
                        </div>
                        <div className={`${style.progress}`}>

                          <span><CircularProgress percentage={70} />   Classes Completed <strong>{enrolments.completed} out of {enrolments.total}</strong></span>
                        </div>
                      </div>

                    </div>
                  </div>

                ))}

              </div>





              {/*-------------for mobile---------------  */}

              <div className={`${style.cardMob}`}>

                {EnrolmentsData.map((enrolments, index) => (
                  <div className={` p-3 ${style.cardWrapper}`} key={index} onClick={() => enrolments.status === 'Cancelled' ? handleOnCancelledClick(enrolments) : null}>
                    <div className="">
                      <div className={`${style.cardImgTextCtnrM}`}>
                        <div className={`img-fluid rounded ${style.imageDivM}`}><img src={enrolments.image} alt={enrolments.title} className={`img-fluid rounded ${style.image}`} /> </div>

                        <div>
                          <span className='d-flex gap-3 align-items-center mb-2'>
                            <small className={style.coursId}>Course ID:{enrolments.courseId}</small>
                            <span
                              className={`badge ${style.classStatus} ${enrolments.status === 'Upcoming' ? style.upCommingBg : style.cancelBg
                                } `}
                            >
                              {enrolments.status}
                            </span>

                          </span>

                          <h5 className="mb-1">{enrolments.title}</h5>
                          <p className={` mb-1 ${style.coursName}`}>By {enrolments.organization}</p>
                          <p className={` mb-1 ${style.coursId}`}>Upcoming Class</p>
                          <p className={` mb-0 ${style.datefrom}`}>{enrolments.date}, from {enrolments.time}</p>
                        </div>

                      </div>




                      <div>




                        <div className={`${style.progressM}`}>

                          <span><CircularProgress percentage={70} />  Classes Completed </span>

                          <span><strong>{enrolments.completed} out of {enrolments.total}</strong></span>
                        </div>
                        <div className={` ${style.qrBoxM}`} onClick={() => handleShowQR(enrolments)}>
                          <img src='./qrCodeIcon.svg' alt='QR code icon' />

                          <span>Show Qr to Mark attendance</span>
                        </div>
                      </div>

                    </div>
                  </div>

                ))}


              </div>


            </div>


          ) : (
            <div >

              {/*---------for Desktop-----------  */}
              <div className={`  ${style.cardWeb}`} >
                {BookingsData.map((bookings, index) => (

                  <div className={` p-3 ${style.cardWrapper}`} key={index}>




                    <div className={style.bookingRow}>

                      <div className={style.bookingRowItem1}>
                        <div className={`img-fluid rounded ${style.imageDiv}`}><img src={bookings.image} alt={bookings.title} className={`img-fluid rounded ${style.image}`} /> </div>

                      </div>

                      <div className={style.bookingRowItem2}>
                        <div className='row align-items-center'>
                          <div className="col-md-6"><h3 className={`${style.organizationName}`}>{bookings.organization}</h3></div>
                          <div className="col-md-6  d-flex justify-content-end"><span className={`badge ${style.classStatus} ${bookings.status === 'Upcoming' ? style.upCommingBg : style.cancelBg} mb-2`}>
                            {bookings.status}</span>

                          </div>

                        </div>
                        <div className={`mt-4 ${style.bookingIdRow} `}>
                          <div className={`col-md-4 ${style.bookingId} ${style.bookingIdFirst}`}><div><span>Your Booking Reference</span><h6>Booking ID:{bookings.courseId}</h6></div></div>
                          <div className={`col-md-4 ${style.bookingId} ${style.bookingIdSec}`}><div> <span>Reservation Date & Time</span><h6>{bookings.date} at {bookings.time}</h6></div> </div>
                          <div className={`col-md-4 ${style.bookingId} ${style.bookingIdThird}`}><div><span>Venue Location</span><h6>{bookings.venue}</h6></div> </div>


                        </div>

                      </div>

                    </div>
                  </div>


                ))}

              </div>


              {/* ------for mobile----- */}
              <div className={`${style.cardMob}`}>
                {BookingsData.map((bookings, index) => (
                  <div className={` p-3 ${style.cardWrapper}`} key={index}>
                    <div className="row g-3 align-items-center">

                      <div className='d-flex gap-2' >
                        <div className={`img-fluid rounded ${style.imageDivBokM}`}><img src={bookings.image} alt={bookings.title} className={`img-fluid rounded ${style.image}`} /> </div>
                        <div>
                          <div className='d-flex gap-3 align-items-center'> <div className={`  ${style.bookingIdFirst}  ${style.bookingIdFirstM}`}><div><h6 className='mb-0'>Booking ID:{bookings.courseId}</h6></div></div>

                            <div><span className={`badge ${style.classStatus} ${bookings.status === 'Upcoming' ? style.upCommingBg : style.cancelBg}`}> {bookings.status}</span></div>


                          </div>

                          <div><h3 className={`${style.organizationName} ${style.organizationNameM} fs-6`}>{bookings.organization}</h3></div>



                        </div>

                      </div>

                      {/*  */}
                      <div className='d-flex gap-5'>
                        <div className={`col-md-4 ${style.bookingId}`}><div> <span>Reservation Date & Time</span><h6>{bookings.date} at {bookings.time}</h6></div> </div>
                        <div className={`col-md-4 ${style.bookingId}`}><div><span>Venue Location</span><h6>{bookings.venue}</h6></div> </div>


                      </div>


                    </div>
                  </div>

                ))}

              </div>
            </div>

          )}

          {/*-------------- QR Code Modal----------------*/}


          <Modal show={showModal} onHide={handleClose} centered className={`${style.Modal}`}>
            {/* <Modal.Header closeButton>
          <Modal.Title>Attendance QR Code</Modal.Title>
        </Modal.Header> */}
            <Modal.Body className="text-center d-flex justify-content-center">
              {selectedQR && (
                <>
                  <div>
                    <div className={style.qrWrapper}>
                      <img src='./qrbg.svg' alt='bg' />


                      <div className={style.qrOverlay}>
                        <img src='./qrImage.png' alt="QR Code" className={style.qrImage} />

                      </div>


                      {/* -----overlay-2------- */}

                      <div className={style.qrOverlaytwo}>
                        <h4 className={style.location}><img src='./locationIcon.svg' /> Ain Dubai, Bluewater Island & Jbr</h4>
                        <span className={style.courseId}>Course ID: #CL8901</span>
                        <h3 className={style.orgHeading}>Khathak Sessions <br></br> <span>By Taal performing arts</span></h3>
                        <div className='row'>

                          <div className={` col-md-6 ${style.qrbottomData}`} >
                            <div>

                              <span>Date </span>
                              <h5>May 12, 2025</h5>

                            </div>
                          </div>
                          <div className={` col-md-6 ${style.qrbottomData}`}>
                            <div>
                              <span>Timing</span>
                              <h5>from 5:00 PM to 6:30 PM</h5>

                            </div>


                          </div>
                          <div className={` col-md-6 ${style.qrbottomData}`}>
                            <div>

                              <span>Session number </span>
                              <h5>07</h5>
                            </div>


                          </div>
                          <div className={` col-md-6 ${style.qrbottomData}`}>
                            <div>

                              <span>Total sessions </span>
                              <h5>07/15</h5>

                            </div>


                          </div>


                        </div>

                      </div>

                      <img src='./flowerQrbg.svg' className={style.flowerQr} />









                    </div>






                  </div>



                </>
              )}
            </Modal.Body>
          </Modal>

        </div>

      )}

    </div>
  )
}
