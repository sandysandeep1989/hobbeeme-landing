import Image from "next/image";
import HomePage from './homePage'
import OfferLanding from "./offer-landing/page";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
   <>
    {/* <OfferLanding/> */}
    <Header/>
             <div style={{padding:'240px  20px 20px',  textAlign:'center', height:'calc(100vh - 350px)'}}>
              <p>STAY TUNED FOR</p>
           <h1 style={{fontSize:'4.5rem', fontFamily:'Oswald'}}>  SOMETHING AMAZING </h1>  
          <h3>  Launching soon in UAE</h3>
          </div>
    <Footer/>
   </>
  );
}
