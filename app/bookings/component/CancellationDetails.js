"use client";
import React, { useState, useRef, useEffect } from "react";
import style from './booking.module.css'
import styleCancell from './cancellationD.module.css'
import { Modal } from 'react-bootstrap';
import CircularProgress from './Progress';
export const CancellationDetails = ({ booking }) => {

  console.log("kalsar :", booking)

  const [showModal, setShowModal] = useState(false);
  const [showDModal, setShowDModal] = useState(false);
  const [selectedQR, setSelectedQR] = useState(null);
  const [step, setStep] = useState(1);



  const tabRefs = useRef([]);


  const handleShowQR = (enrolment) => {
    setSelectedQR(enrolment);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);





  const tabsList = ['Details', 'Attendance'];




  //   ---------------------------

  const handleNext = () => {
    setStep(2);
  };

  const [activeTab, setActiveTab] = useState("details");
  const detailsRef = useRef(null);
  const attendanceRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeRef = activeTab === "details" ? detailsRef : attendanceRef;
    if (activeRef.current) {
      setIndicatorStyle({
        width: `${activeRef.current.offsetWidth}px`,
        left: `${activeRef.current.offsetLeft}px`,
      });
    }
  }, [activeTab]);

  const sessions = [
    { session: "Session 1", date: "10 May, 2025", status: "Present" },
    { session: "Session 2", date: "10 May, 2025", status: "Present" },
    { session: "Session 3", date: "10 May, 2025", status: "Present" },
    { session: "Session 4", date: "10 May, 2025", status: "Present" },
    { session: "Session 5", date: "10 May, 2025", status: "Present" },
    { session: "Session 6", date: "10 May, 2025", status: "Present" },
    { session: "Session 7", date: "10 May, 2025", status: "Present" },
    { session: "Session 8", date: "10 May, 2025", status: "Present" },
  ];

  const handleDeleteModal = () => {
    setShowDModal(true);

  }
  const handleDClose = () => {

    setShowDModal(false);
    setTimeout(() => {
      setStep(1);

    }, 1000)

  }




  return (
    <>

      <div className={style.accountPage}>


        <div className={styleCancell.myBokingHeading}><h1>My Bookings </h1> <span onClick={() => handleDeleteModal()} >Cancel Class</span></div>


        <div className='row'>

          <div className={`mb-3 p-3 ${style.cardWrapper} ${style.cardWeb} `}>
            <div className="row g-3 align-items-center">
              <div className="col-md-2">
                <img src={booking.image} alt={booking.title} className={`img-fluid rounded ${style.image}`} />
              </div>
              <div className="col-md-6">
                <small className={style.coursId}>Course ID:{booking.courseId}</small>
                <h5 className="mb-1">{booking.title}</h5>
                <p className={` mb-1 ${style.coursName}`}>By {booking.organization}</p>
                <p className={` mb-1 ${style.coursId}`}>Upcoming Class</p>
                <p className="mb-0">{booking.date}, from {booking.time}</p>
              </div>
              <div className="col-md-4 text-md-end">
                {/* <span className={`badge bg-${booking.statusColor} ${style.classStatus} mb-2`}>{booking.status}</span> */}
                <div className={`d-flex align-items-center gap-2 justify-content-md-end ${style.qrBox}`} onClick={() => handleShowQR(booking)}>
                  <img src='./qrCodeIcon.svg' alt='QR code icon' />

                  <span>Show Qr to Mark attendance</span>
                </div>
                <div className={` ${style.progress}`}>

                  <span> <span><CircularProgress percentage={70} /> </span> Classes Completed <strong>{booking.completed} out of {booking.total}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* --for mobile-------- */}

          <div className={`mb-3 `}>
            <div className={`p-3  ${style.cardWrapper} ${style.cardMob}`}>
              <div className="row g-3 align-items-center">

                <div className={`${style.cardFlexx}`}>
                  <div className={`img-fluid rounded ${style.imageDiv}`}><img src={booking.image} alt={booking.title} className={`img-fluid rounded ${style.image}`} /> </div>
                  <div>
                    <div className='d-flex gap-3 align-items-center '> <div className={`  ${style.bookingIdFirst}  ${style.bookingIdFirstM}`}><div><h6 className='mb-0'>Booking ID:{booking.courseId}</h6></div></div>

                      <div><span className={`badge ${style.classStatus} ${booking.status === 'Upcoming' ? style.upCommingBg : style.cancelBg}`}> {booking.status}</span></div>


                    </div>

                    <div><h3 className={`${style.organizationName} ${style.organizationNameM} fs-6`}>{booking.organization}</h3></div>
                    <div className={`d-flex align-items-center gap-2 justify-content-md-end ${style.qrBox}`} onClick={() => handleShowQR(booking)}>
                      <img src='./qrCodeIcon.svg' alt='QR code icon' />

                      <span>Show Qr to Mark attendance</span>
                    </div>



                  </div>

                </div>

                {/*  */}
                <div className={`${style.cardWrapperBtmFlex}`}>
                  <div className={`col-md-4 ${style.bookingId}`}><div> <span>Reservation Date & Time</span><h6>{booking.date} at {booking.time}</h6></div> </div>
                  <div className={`col-md-4 ${style.bookingId}`}><div><span>Venue Location</span><h6>{booking.venue}</h6></div> </div>


                </div>


              </div>


            </div>

          </div>



        </div>




        <div className={styleCancell.bookingTabs}>
          {/* Tab Headers */}
          <div className={styleCancell.tabHeader}>
            <div
              ref={detailsRef}
              className={styleCancell.tab}
              onClick={() => setActiveTab("details")}
            >
              Details
            </div>
            <div
              ref={attendanceRef}
              className={styleCancell.tab}
              onClick={() => setActiveTab("attendance")}
            >
              Attendance
            </div>

            {/* Sliding Indicator */}
            <div className={styleCancell.tabIndicator} style={indicatorStyle}></div>
          </div>

          {/* Tab Content */}
          <div className={styleCancell.tabContent}>
            {activeTab === "details" && (
              <div>

                <div className="row">

                  {/* -------- */}
                  <div className="col-md-6">
                    <div className={`  ${styleCancell.detailsFirstRowSecCol}  ${styleCancell.detailsComnCell}`}>
                      <h4>Venue Location</h4>
                      <div className={`${styleCancell.vanueLocation}`}><div><img src='./venueLocationIcon.svg' /><span className={styleCancell.vanueLocationInner}>Culinary Avenue, Suite 4B</span> </div> <span className={styleCancell.viewOnMap}>View on map</span> </div>
                    </div>
                    <div className={`${styleCancell.detailsFirstRowSecCol}  ${styleCancell.detailsComnCell} ${styleCancell.detailsComnCel}`}>
                      <h4>Attendee details (2)</h4>
                      <div className={styleCancell.attendeDiv}><img src='./attendeeIcon.svg' /> <div><h5>Abhishek Singh </h5><span>Male, 22 </span></div>  </div>
                      <div className={styleCancell.attendeDiv}><img src='./attendeeIcon.svg' /> <div><h5>Abhishek Singh </h5> <span>Male, 22 </span></div>  </div>
                    </div>


                  </div>

                  {/* ---- */}
                  <div className="col-md-6">
                    <div className={`${styleCancell.detailsFirstRowSecCol}  ${styleCancell.detailsComnCell}  ${styleCancell.detailsComnCellM}`}>
                      <div className={`${styleCancell.cmnBussTyp} ${styleCancell.cmnBussTypeHead}`}><h4 className={styleCancell.bussTypet}>Booking type </h4><h4>Fixed</h4></div>
                      <div className={`${styleCancell.cmnBussType}`}><span className={styleCancell.bussTypetd}>Mode of class</span><span className={styleCancell.bussTypeSectd}>In Studio </span></div>
                      <div className={`${styleCancell.cmnBussType}`}><span className={styleCancell.bussTypetd}>Level </span><span className={styleCancell.bussTypeSectd}>Beginner</span></div>
                      <div className={`${styleCancell.cmnBussType}`}><span className={styleCancell.bussTypetd}>No. of session</span><span className={styleCancell.bussTypeSectd}>8 sessions</span></div>
                      <div className={`${styleCancell.cmnBussType}`}><span className={styleCancell.bussTypetd}>Batch</span><span className={`${styleCancell.bussTypeSectd} ${styleCancell.Batch}`}>Batch A | Mon & Wed, 6-7 PM </span></div>
                      <div className={`${styleCancell.cmnBussType}`}><span className={styleCancell.bussTypetd}>Start from</span><span className={styleCancell.bussTypeSectd}>7 may 2025</span></div>


                    </div>


                  </div>



                </div>


                <div className={`row ${styleCancell.secRow}`}>
                  <div className='col-md-6' >
                    <div className={` ${styleCancell.detailsFirstRowSecCol}  ${styleCancell.detailsComnCell}`}>
                      <h4>Payment summary</h4>
                      <div className={`${styleCancell.PaySum}`}><span>Ticket – Adult (12+ yrs) * 2 </span><span>AED 500</span></div>
                      <div className={`${styleCancell.PaySum}`}><span>Discount</span><span>-AED 50</span></div>
                      <div className={`${styleCancell.PaySum}`}><span>Total</span><span>AED 450</span></div>
                      <div className={`${styleCancell.PaySum}`}><span>Payment mode</span><span className={styleCancell.yellowClr}>Hobeemee wallet</span></div>



                    </div>




                  </div>


                </div>


              </div>
            )}
            {activeTab === "attendance" && (
              <div>
                <div className={styleCancell.containerr}>
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
                </div>
              </div>
            )}
          </div>
        </div>




        {/* QR Code Modal */}
        <Modal show={showModal} onHide={handleClose} centered className={`${style.Modal}`}>

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

        {/* ------------Delete ---modal------------ */}


       

<Modal show={showDModal} onHide={handleDClose} centered className={`${style.Modal}`}>
  <Modal.Body className="text-center">
    <div className={styleCancell.deleteModalReasonsCntr}>
      <div className={styleCancell.stepWrapper}>
        {step === 1 && (
          <div className={`${styleCancell.stepContent} ${styleCancell.fadeIn}`}>
            <img src="./bouncing-bee.gif" alt="bee gif" className={styleCancell.bee} />
            <h2>What's the reason for cancellation?</h2>
            <ul className={styleCancell.checkboxList}>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Change of plans</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Found a better alternative</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Personal emergency</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Scheduling conflict</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Weather conditions</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Transportation issues</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Health reasons</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Financial constraints</li>
              <li><input type="checkbox" className={styleCancell.checkbox} /> Others</li>
            </ul>
            <div className={styleCancell.buttonGroup}>
              <button className={styleCancell.cancel} onClick={handleDClose}>Cancel</button>
              <button className={styleCancell.next} onClick={() => setStep(2)}>Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={`${styleCancell.stepContent} ${styleCancell.fadeIn}`}>
            <img src="./cancell.svg" alt="cancel icon" />
            <div className={styleCancell.areYouSure}>
              <h3>Are you sure you want to cancel this Class?</h3>
            </div>
            <div className={styleCancell.deleteBtns}>
              <button className={styleCancell.cencel} onClick={handleDClose}>Cancel</button>
              <button className={styleCancell.yesCencel}>Yes, Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  </Modal.Body>
</Modal>


      </div>

    </>
  );
};