'use client'
import React from 'react'
import styles from './captured.module.css';
import Link from 'next/link';
import { useState ,useEffect} from 'react';

const Rating = () => {

 const [reviews, setReviews] = useState(
  [
    {id:1 ,like: 135, dislike: 11,isLiked: false, isDisliked: false},
  {id: 2,like: 10, dislike: 136,isLiked: false, isDisliked: false}
]
);



      const totalReviews = 420;
      const ratings = {
        5: 320,
        4: 50,
        3: 25,
        2: 15,
        1: 10,
      };
    
      const maxCount = Math.max(...Object.values(ratings));

  const handleLike = (id) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === id 
          ? {
              ...review,
              like: review.isLiked ? review.like - 1 : review.like + 1,
              isLiked: !review.isLiked
            }
          : review
      )
    );
  };

  const handleDislike = (id) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === id 
          ? {
              ...review,  
              dislike: review.isDisliked ? review.dislike - 1 : review.dislike + 1,
              isDisliked: !review.isDisliked
            }
          : review
      )
    );
  };  

  useEffect(()=>{
    console.log(reviews)
  },[reviews])



  return (
    <>


<div className=''>




            <div className={`${styles.reviewContainer} `}>


  <div className={styles.reviewContainerHeader}>
  <div className={styles.reviewHeader}>
    <span className={styles.ratingScore} aria-label="Average rating">4.9 / 5.0</span>
    <span className={`${styles.stars} ${styles.mobileShow}`} aria-hidden="true">★★★★★</span>

  </div>
  <span className={`${styles.stars} ${styles.mobileHide}`} aria-hidden="true">★★★★★</span>

  <p className={styles.reviewCount}>
    {totalReviews.toLocaleString()} Reviews
  </p>



  </div>

  <div className={styles.ratingBars}>
    {Object.entries(ratings)
      .sort(([a], [b]) => b - a)
      .map(([star, count]) => {
        const percentage = (count / maxCount) * 100;
        return (
          <div className={styles.ratingRow} key={star}>
            <label className={styles.starLabel} htmlFor={`rating-${star}`}>
              {star} Star
            </label>
            <div className={styles.barBackground} id={`rating-${star}`} role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
              <div
                className={styles.barFilled}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
  </div>
</div>



<h2 className={`${styles.ratingTitle} ${styles.mobileHide}`}>
            What Students are saying about Taal
            </h2>





    {reviews.map((data) => {
        return(
            <div className={styles.ratingContainerHeader} key={data.id}>

   


        
            <div className={styles.ratingCardContainer}>
                <div className={styles.ratingCard}>
                    <div className={styles.ratingCardHeader}>
                        <div>
                            <img src="/class/student.svg" alt="student" />
        
                        </div>
                        <div className={styles.ratingCardHeaderRight}>
                        Shane Watson
                            <p className={styles.ratingCardDate}>1 day ago</p>
                        </div>
                       
                    </div>
                    <div className={styles.ratingStar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11.3341 1.77808L13.3297 7.92005L19.7878 7.92005L14.5631 11.716L16.5587 17.858L11.3341 14.062L6.10938 17.858L8.10503 11.716L2.88036 7.92005L9.33841 7.92005L11.3341 1.77808Z" fill="black"/>
        </svg> 5.0
                    </div>
                </div>
                <p className={styles.ratingCardText}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                {/* <div className={styles.ratingLikeParent}>
                    <div className={styles.likeButton} onClick={()=>handleLike(data.id)}>

                      {data.isLiked ? (      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="#644EE5">
          <path d="M6.66539 9.55556H4.44316C3.21587 9.55556 2.22094 10.5505 2.22094 11.7778V21.7778C2.22094 23.0051 3.21587 24 4.44316 24H6.66539C7.89269 24 8.88761 23.0051 8.88761 21.7778V11.7778C8.88761 10.5505 7.89269 9.55556 6.66539 9.55556Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.6397 24H13.5666C12.6892 24 11.8314 23.7403 11.1013 23.2536L9.38239 22.1076C9.07328 21.9016 8.88761 21.5546 8.88761 21.1831V12.0728C8.88761 11.8795 8.93807 11.6895 9.034 11.5216L13.3321 4H14.8084C17.027 4 18.3503 6.47262 17.1196 8.31861L15.5543 10.6667H21.597C23.0427 10.6667 24.1035 12.0253 23.7529 13.4279L21.9515 20.6335C21.4568 22.612 19.6791 24 17.6397 24Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>) :(      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M6.66539 9.55556H4.44316C3.21587 9.55556 2.22094 10.5505 2.22094 11.7778V21.7778C2.22094 23.0051 3.21587 24 4.44316 24H6.66539C7.89269 24 8.88761 23.0051 8.88761 21.7778V11.7778C8.88761 10.5505 7.89269 9.55556 6.66539 9.55556Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.6397 24H13.5666C12.6892 24 11.8314 23.7403 11.1013 23.2536L9.38239 22.1076C9.07328 21.9016 8.88761 21.5546 8.88761 21.1831V12.0728C8.88761 11.8795 8.93807 11.6895 9.034 11.5216L13.3321 4H14.8084C17.027 4 18.3503 6.47262 17.1196 8.31861L15.5543 10.6667H21.597C23.0427 10.6667 24.1035 12.0253 23.7529 13.4279L21.9515 20.6335C21.4568 22.612 19.6791 24 17.6397 24Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)}
              {data.like}
                    </div>



                    <div className={styles.likeButton} onClick={()=>handleDislike(data.id)}>
                      {data.isDisliked ? (  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="#644EE5">
          <path d="M20.0006 17.3334H22.2229C23.4502 17.3334 24.4451 16.3385 24.4451 15.1112V7.33339C24.4451 6.1061 23.4502 5.11117 22.2229 5.11117L20.0006 5.11117C18.7733 5.11117 17.7784 6.1061 17.7784 7.33339V15.1112C17.7784 16.3385 18.7733 17.3334 20.0006 17.3334Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.0263 4.00006H13.0994C13.9768 4.00006 14.8347 4.25978 15.5647 4.7465L17.2836 5.89243C17.5927 6.0985 17.7784 6.44543 17.7784 6.81693V15.9272C17.7784 16.1206 17.7279 16.3106 17.632 16.4785L13.334 24.0001H11.8576C9.63902 24.0001 8.31571 21.5274 9.54637 19.6815L11.1117 17.3334H5.06902C3.62331 17.3334 2.56251 15.9748 2.91315 14.5722L4.71456 7.36657C5.20919 5.38805 6.98689 4.00006 9.0263 4.00006Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>) : (  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M20.0006 17.3334H22.2229C23.4502 17.3334 24.4451 16.3385 24.4451 15.1112V7.33339C24.4451 6.1061 23.4502 5.11117 22.2229 5.11117L20.0006 5.11117C18.7733 5.11117 17.7784 6.1061 17.7784 7.33339V15.1112C17.7784 16.3385 18.7733 17.3334 20.0006 17.3334Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.0263 4.00006H13.0994C13.9768 4.00006 14.8347 4.25978 15.5647 4.7465L17.2836 5.89243C17.5927 6.0985 17.7784 6.44543 17.7784 6.81693V15.9272C17.7784 16.1206 17.7279 16.3106 17.632 16.4785L13.334 24.0001H11.8576C9.63902 24.0001 8.31571 21.5274 9.54637 19.6815L11.1117 17.3334H5.06902C3.62331 17.3334 2.56251 15.9748 2.91315 14.5722L4.71456 7.36657C5.20919 5.38805 6.98689 4.00006 9.0263 4.00006Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)}
                    {data.dislike}
                            </div>
                </div> */}
            </div>
              
              </div>

        )
    })}

    <div onClick={()=>{
        router.push('/class/reviews')
    }} className={`${styles.showMoreButton} ${styles.mobileHide}`}>
    Show More
    </div>
  

      </div>
    </>
  
  )
}

export default Rating
