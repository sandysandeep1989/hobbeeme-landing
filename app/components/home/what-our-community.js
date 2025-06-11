import { Star } from '../icons';
import styles from './whatourcommunity.module.css'

const testimonials = Array(4).fill({
       name: 'Albert Stevano',
       rating: 5.0,
       text: '“Their team demonstrated exceptional professionalism, responsiveness, highly recommend them to any business seeking to enhance their digital”'
     });
     
     function TestimonialRow({ reverse }) {
       const spanClass = reverse ? styles.span3 : styles.span1;
       const spanAltClass = reverse ? styles.span4 : styles.span2;
       
       return (
         <div className={styles.discoverWrapper}>
           <div className={spanClass}>
             {[...testimonials, ...testimonials].map((item, index) => (
               <div key={`a-${index}`} className={styles.sayingBox}>
                 <div className={styles.cont}>
                   <div className={styles.name}>
                     <div className={styles.pic}></div> {item.name}
                   </div>
                   <div className={styles.rating}>
                     <Star /> {item.rating}
                   </div>
                 </div>
                 <p>{item.text}</p>
               </div>
             ))}
           </div>
           <div className={spanAltClass}>
             {[...testimonials, ...testimonials].map((item, index) => (
               <div key={`b-${index}`} className={styles.sayingBox}>
                 <div className={styles.cont}>
                   <div className={styles.name}>
                     <div className={styles.pic}></div> {item.name}
                   </div>
                   <div className={styles.rating}>
                     <Star /> {item.rating}
                   </div>
                 </div>
                 <p>{item.text}</p>
               </div>
             ))}
           </div>
         </div>
       );
     }
     
     export default function WhatOurCommunity() {
       return (
         <div className={styles.WhatOurCommunity}>
           <div className={styles.heading}>
             <h4>What Our Community Is Saying</h4>
             <p>Join thousands of young explorers in Dubai who’ve found their next favourite class, event, or experience on Hobbe Mee.</p>
           </div>
           <TestimonialRow reverse={false} />
           <TestimonialRow reverse={true} />
         </div>
       );
     }
     