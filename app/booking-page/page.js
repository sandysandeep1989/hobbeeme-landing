import BookingClientWrapper from "../components/booking-payment/BookingClientWrapper";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from './page.module.css'
export default function BookingPage() {

  return (
    <div className={styles.page} >
      <Header/>
      <BookingClientWrapper />
      <Footer/>
    </div>
  );
}
