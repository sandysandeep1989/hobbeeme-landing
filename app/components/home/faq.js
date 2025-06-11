import React, { useState } from 'react'
import styles from './faq.module.css'
import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {


    return (

        <div className={styles.Faq}>
            <h4>FREQUENTLY ASKED QUESTIONS</h4>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.accodionHeader}>What is Hobbe Mee?</Accordion.Header>
                    <Accordion.Body>
                        Hobbeeme is Dubai’s premier platform for hobby and creative experiences, connecting passionate instructors and studios with a community eager to explore new skills. Whether you offer art, fitness, dance, music, wellness, or unique workshops, Hobbeeme helps you reach the right audience, fill your classes, and grow your brand—without the hassle. Join us to boost visibility, simplify bookings, and be part of a vibrant creative movement across the city.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.accodionHeader}>What is the difference between Classes and Experiences?</Accordion.Header>
                    <Accordion.Body>
                        On Hobbeeme, classes are designed for continuous learning and skill-building — they typically follow a recurring format, allowing users to regularly attend and deepen their knowledge or expertise in a particular hobby. In contrast, experiences are usually one-off activities or workshops focused more on leisure, fun, or trying something new — perfect for exploring a hobby in a relaxed, event-style setting.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.accodionHeader}>Who can list their class or experience on Hobbeeme?</Accordion.Header>
                    <Accordion.Body>
                    Licensed freelancers, businesses, academies, and studios who conduct classes, workshops, or events in the UAE can list their offerings on Hobbeeme. The platform not only helps you connect with a diverse audience but also makes it easy for users to directly discover and book your classes or experiences.
                    </Accordion.Body>
                </Accordion.Item>

               

                <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.accodionHeader}>How do I list with Hobbeeme?</Accordion.Header>
                    <Accordion.Body>
                        You can get started by attending one of our onboarding webinars or simply filling out your details through the “List with Hobbeeme” form on our platform. Once we receive your interest, our team will reach out to guide you through the next steps. To confirm your listing, a formal agreement will need to be signed.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header className={styles.accodionHeader}>What are the charges to be listed on Hobbeeme?</Accordion.Header>
                    <Accordion.Body>
                        There is a one-time annual registration fee of AED 200, which allows unlimited listing of your classes and workshops for the year. Additionally, we operate on a commission-based model, taking 25–10% commission on the value of each booked class. This means you gain extra customers while retaining 75–90% of your class fee.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header className={styles.accodionHeader}>How do service providers get paid for their services on Hobbeeme?</Accordion.Header>
                    <Accordion.Body>
                        Payments are processed securely and automatically
                        transferred to their account every month. Fast, Reliable, and
                        completely hassle free!
                        However earnings can be seen in their wallets at any point of time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header className={styles.accodionHeader}> Can service providers set their own schedule?</Accordion.Header>
                    <Accordion.Body>
                        Absolutely! They have complete control over their
                        availability, pricing and venue. Set their preferred hours and maintain the
                        perfect work- life balance.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}
