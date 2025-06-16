import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Fb, Yutube} from './icons'
import {   Mail } from 'lucide-react';
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
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>

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
          <span>sales@hobbeeme.com</span>
          
          </p>
          {/* <h4>REACH US AT</h4> */}
          <p className={styles.mail}> <Phone /> +971586582458</p>

          <p className={styles.mail}> <MapPinHouse /> 
          <span>Business Centre,Sharjah Publishing City Free Zone,<br /> Sharjah, United Arab Emirates<br /></span>
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
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=61573751130571&mibextid=wwXIfr&rdid=wACv3UC3zottueLa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15ddg3JQFY%2F%3Fmibextid%3DwwXIfr#"><Fb/></Link>
          <Link href="https://www.instagram.com/hobbee.me?igsh=MWFxYnl2cjVlZnI3&utm_source=qr" target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
