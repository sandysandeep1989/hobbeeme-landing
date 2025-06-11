import { Container, Row, Col } from 'react-bootstrap';
import styles from './Itineary.module.css'
const itinerary = [
  {
    day: 1,
    title: "Old Town Discovery",
    activities: [
      "Meet your guide at the historic Old Town gate.",
      "Guided walking tour through ancient alleys and heritage sites.",
      "Storytelling session featuring local legends and tales.",
      "Coffee stop at a traditional café for Arabian coffee tasting.",
      "Free time to explore hidden courtyards and local shops."
    ]
  },
  {
    day: 2,
    title: "Souks Adventure",
    activities: [
      "Guided tour of vibrant souks: spices, gold, textiles.",
      "Learn bargaining techniques from a local expert.",
      "Participate in a treasure hunt inside the bazaar.",
      "Tasting experience of local snacks at a hidden market café.",
      "Free time to shop for authentic souvenirs and crafts."
    ]
  },
  {
    day: 3,
    title: "Traditional Flavors & Tasting",
    activities: [
      "Morning breakfast tasting of regional delicacies.",
      "Visit artisan bakeries and sweet shops.",
      "Hands-on experience: make a traditional dessert (optional).",
      "Group lunch featuring authentic dishes at a heritage restaurant.",
      "Closing ceremony with group photos and a farewell gift."
    ]
  },
  {
    day: 4,
    title: "Cultural Performances & Farewell",
    activities: [
      "Attend a live performance of traditional music and dance.",
      "Henna art session and photo opportunity in traditional attire.",
      "Souvenir handcrafting workshop with local artisans."
    ]
  },
  {
    day: 5,
    title: "Concluding Day",
    activities: []
  }
];

export default function Itinerary() {
  return (
    <section className={styles.timelineSection}>

      <Row>
        <Col md={3}>
          <h2 className={styles.timelineTitle}>What to bring</h2>
        </Col>
        <Col md={9}>
          <div className={styles.timeline}>
            {itinerary.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                <div className={`${styles.timelineDot} ${index === itinerary.length - 1 ? styles.lasttimelineDot: ""}`}>
                  {index === itinerary.length - 1 ?
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_2247_31524)">
                      <path d="M15.1577 5.95272L10.047 0.842231C8.96946 -0.280775 7.03045 -0.280712 5.95297 0.842231L0.842231 5.95272C-0.280712 7.03004 -0.280775 8.96952 0.842231 10.047L5.95297 15.1575C7.03085 16.2808 8.96912 16.2807 10.047 15.1575L15.1577 10.047C16.2807 8.96962 16.2807 7.03013 15.1577 5.95272ZM5.15291 7.53089C5.77463 7.55397 5.77416 8.44619 5.15291 8.46905H4.44957V9.0382H5.4878C6.10952 9.06128 6.10905 9.9535 5.4878 9.97635H3.98049C3.72144 9.97635 3.51142 9.76633 3.51142 9.50728V6.49266C3.51142 6.2336 3.72144 6.02358 3.98049 6.02358H5.4878C6.10952 6.04666 6.10905 6.93888 5.4878 6.96174H4.44957V7.53089H5.15291ZM9.47394 9.50731C9.47394 9.71402 9.33863 9.89633 9.1408 9.95625C8.94188 10.0164 8.7287 9.93864 8.61459 9.76749L7.46419 8.04191V9.50728C7.44111 10.129 6.54889 10.1285 6.52603 9.50728V6.49266C6.52603 6.28595 6.66134 6.10364 6.85917 6.04372C7.05709 5.9839 7.27074 6.06051 7.38538 6.23248L8.53578 7.95806V6.49266C8.55886 5.87094 9.45108 5.87141 9.47394 6.49266V9.50731ZM11.0146 9.97639H10.7634C10.5043 9.97639 10.2943 9.76636 10.2943 9.50731V6.49269C10.2943 6.23364 10.5043 6.02361 10.7634 6.02361H11.0146C13.6336 6.12325 13.6316 9.87766 11.0146 9.97639Z" fill="white" />
                      <path d="M11.2324 6.98474V9.01523C12.3196 8.76712 12.3189 7.23248 11.2324 6.98474Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2247_31524">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> : item.day}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.dayTitle}>Day {item.day} — {item.title}</h3>
                  {item.activities.length > 0 && (
                    <ul className={styles.activityList}>
                      {item.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

    </section>
  );
}


