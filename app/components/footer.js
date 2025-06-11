import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Fb, Yutube} from './icons'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.section1}>
          <div className={styles.logo}><Image src='/logo.webp' alt='' width={216} height={244}/></div>
          <p>
            A Place Where Curiosity Meets Action. We Connect Dubai’s Young Explorers With Exciting Live Classes, One-Of-A-Kind Experiences, And Buzzing Local Events.
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.section2}>
          <ul>
            {/* <li><Link href="/">Home</Link></li>
            <li><Link href="/plan-a-event">Events</Link></li>
            <li><Link href="/classes">Classes</Link></li>
            <li><Link href="/experience">Experience</Link></li> */}
            <li><Link href="/offer-landing">Offer Services</Link></li> 
            <li><Link href="/term-and-condition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* <div className={styles.section2}>
          <ul>
           
            <li><Link href="/">Contact Us</Link></li>
            <li><Link href="/gift-card">Gift voucher</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
           
           
          </ul>
        </div> */}

        {/* Address and Contact */}
        <div className={styles.section2}>
          <h4>OFFICE</h4>
          
          <p className={styles.mail}><strong> <Mail /> </strong> 
          <span>jhankar@hobbeeme.com</span>
          
          </p>
          {/* <h4>REACH US AT</h4> */}
          <p className={styles.mail}> <Phone /> +91 7854643287</p>

          <p className={styles.mail}> <MapPinHouse /> 
          <span>Lumbung Hidup St 425 East<br />Java Madiun City Block ABC</span>
          </p>
        </div>

        {/* Subscription and App Links */}
        <div className={styles.section3}>
          <h5>Get the latest experiences in your inbox</h5>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Your e-mail" />
            <button>Submit</button>
          </div>
          <div className={styles.appLinks}>
            <Image src="/AppleStore.png" alt="App Store" width={216} height={73} />
            <Image src="/PlayStore.png" alt="Google Play" width={216} height={73} />
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.reserved}>All Right Reserved - HOBBEEME</p>
        <div className={styles.social}>
          <Link href="/"><Fb/></Link>
          <Link href="/"><Yutube/></Link>
        </div>
      </div>
    </footer>
  );
}
