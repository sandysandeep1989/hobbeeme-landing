'use client'
import Header from '@/app/components/header';
import styles from '../component/PlanEvent.module.css'
import Footer from '@/app/components/footer';
import Image from 'next/image';
import EventForm from './enquiry-event'
import { useState } from 'react';

const events = [
  {
    title: "Personal Celebrations",
    description: "Birthday parties, anniversaries, graduations and personal milestones",
    image: "/event/event1.png",
  },
  {
    title: "Family Gatherings",
    description: "Family reunions, holiday parties, baby showers and intimate gatherings",
    image: "/event/event2.png",
  },
  {
    title: "Corporate Events",
    description: "Team building, conferences, product launches and networking events",
    image: "/event/event3.png",
  },
  {
    title: "Special Occasions",
    description: "Weddings, engagement parties, retirement celebrations and more",
    image: "/event/event4.png",
  },
  {
    title: "Team Building & Employee Engagement",
    description: "Boost team spirit with fun, interactive workshops and bonding activities",
    image: "/event/event5.png",
  },
  {
    title: "Corporate Social Responsibility",
    description: "Purposeful volunteer events and eco-friendly drives",
    image: "/event/event6.png",
  },
];

export default function PlanAEventPage() {
  const [popOpen, setPopOpen] = useState(false);
  const eventTitle = events.map((item) => item.title);
  const [eventVal, setEventValue] = useState('');

  const popUp = (data) => {
    setPopOpen(data)
  }

  const eventSelect = (title) => {
    setEventValue(title);
    setPopOpen(true);
  }

  return (
    <>
      {/* <Header /> */}
      <div className={styles.bodyEvent}>
        <div className='container'>
          <div className={styles.headingSection}>
            <div className={styles.planTag}>PLAN AN EVENT</div>
            <h1>PLAN Your <span>Perfect Event</span></h1>
            <p className={styles.headingText}> Whether you're dreaming up a birthday bash, a hands-on workshop, or a chill gathering with friends—<strong>Hobbeeme is here to bring your event to life.</strong>
              We'll help you find the perfect activity, venue, and local experts to make it unforgettable.</p>
          </div>
        </div>

        {popOpen && <EventForm eventSelect={eventTitle} eventVal={eventVal} popClose={popUp} />}

        <section className={styles.eventSection}>
          <div className="container">
            <h2 className={styles.heading}>We Host All Types of Events</h2>
            <div className="row ">
              {events.map((event, index) => (
                <div className={`col-md-6  ${styles.cardBottom}`} key={index}>
                  <div className={styles.card} onClick={() => eventSelect(event.title)}>
                    <div className={styles.imageCard}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={350}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <a href="#" className={styles.moreLink}>More Details
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="0.5" width="31" height="31" rx="15.5" stroke="white" />
                          <path d="M14.5603 17.4545L16.4997 19.3939M16.4997 19.3939L18.4531 17.4545M16.4997 19.3939L16.4997 13.0909" stroke="white" strokeWidth="1.09091" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}
