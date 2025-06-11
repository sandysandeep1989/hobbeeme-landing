import PlanAEventPage from "./component/plan-a-event";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./page.module.css";
export default function PlanAEvent() {
  return (
   <><Header/>
   <div className={styles.planAEventPageMargin}>

  
    <PlanAEventPage/>
    </div>
    <Footer/>
   </>
  );
}
