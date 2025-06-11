"use client"
import { useState } from 'react';
import styles from './CustomerReview.module.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const reviewsData = [
    {
        id: 1,
        name: 'Shane Watson',
        time: '1 day ago',
        rating: "5.0",
        reviewText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        likes: 135,
        dislikes: 10,
        images: ['/experience/venue.svg', '/experience/venue.svg']
    },
    {
        id: 2,
        name: 'Shane Watson',
        time: '1 day ago',
        rating: "5.0",
        reviewText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        likes: 135,
        dislikes: 10,
        images: ['/experience/venue.svg', '/experience/venue.svg']
    },
    {
        id: 3,
        name: 'Shane Watson',
        time: '1 day ago',
        rating: "5.0",
        reviewText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        likes: 135,
        dislikes: 10,
        images: ['/experience/venue.svg', '/experience/venue.svg']
    }
];

const CustomerReview = () => {
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [reviews, setReviews] = useState(
        reviewsData.map((r) => ({ ...r, liked: false, disliked: false }))
    );

    const toggleLike = (id) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id
                    ? {
                        ...review,
                        liked: !review.liked,
                        disliked: review.liked ? review.disliked : false // Optional: remove dislike when like is selected
                    }
                    : review
            )
        );
    };
    
    const toggleDislike = (id) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id
                    ? {
                        ...review,
                        disliked: !review.disliked,
                        liked: review.disliked ? review.liked : false // Optional: remove like when dislike is selected
                    }
                    : review
            )
        );
    };
    

    return (
        <>
            <div className={styles.customerReviewHead}>Customer Reviews</div>
            <Row className={styles.rating}>
                <Col md={6} className={styles.reviewSummary}>
                    <h2 className={styles.ratingNumber}>4.9 / 5.0</h2>
                    <p className={styles.ratingCount}>420 Reviews</p>
                    <div className={styles.starRating}>
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="33"
                                viewBox="0 0 32 33"
                                fill="none"
                            >
                                <path
                                    d="M15.9996 3.34375L18.9931 12.5567H28.6802L20.8432 18.2506L23.8366 27.4636L15.9996 21.7697L8.16261 27.4636L11.1561 18.2506L3.31907 12.5567H13.0061L15.9996 3.34375Z"
                                    fill="#EAB308"
                                />
                            </svg>
                        ))}
                    </div>

                </Col>
                <Col md={6} className={styles.ratingDistribution}>
                    {['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'].map((label, index) => (
                        <div key={index} className={styles.ratingRow}>
                            <span>{label}</span>
                            <ProgressBar now={(5 - index) * 20} className={styles.progressBar} />
                        </div>
                    ))}
                </Col>
            </Row>

            {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (

                <div key={review.id} className={styles.reviewCard}>
                    <div className={styles.reviewCardWrapped}>
                        <div className={styles.userId}>
                            <div>
                                <img src="/experience/client.svg" alt="User" className={styles.userImage} />
                            </div>
                            <div className={styles.userInfo}>
                                <strong>{review.name}</strong>
                                <span>{review.time}</span>
                            </div>
                        </div>
                        <div>

                            <div className={styles.reviewImages}>
                                {review.images.map((img, idx) => (
                                    <img key={idx} src={img} alt="Review" className={styles.reviewImage} />
                                ))}
                            </div>
                            <p className={styles.reviewText}>{review.reviewText}</p>
                            <div className={styles.reviewActions}>
                                <span onClick={() => toggleLike(review.id)} style={{ cursor: 'pointer' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path d="M7 10.01V22.01V10.01Z" fill="#D86666" />
                                        <path
                                            d="M7 10.01V22.01"
                                            stroke="#C7C7C8"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.0001 5.89001L14.0001 10.01H19.8301C20.1406 10.01 20.4468 10.0823 20.7245 10.2212C21.0022 10.36 21.2438 10.5616 21.4301 10.81C21.6164 11.0584 21.7423 11.3468 21.7978 11.6522C21.8534 11.9577 21.837 12.2719 21.7501 12.57L19.4201 20.57C19.2989 20.9854 19.0463 21.3504 18.7001 21.61C18.3539 21.8697 17.9328 22.01 17.5001 22.01H4.00008C3.46964 22.01 2.96094 21.7993 2.58587 21.4242C2.21079 21.0492 2.00008 20.5404 2.00008 20.01V12.01C2.00008 11.4796 2.21079 10.9709 2.58587 10.5958C2.96094 10.2207 3.46964 10.01 4.00008 10.01H6.76008C7.13216 10.0098 7.49681 9.90582 7.81303 9.70973C8.12925 9.51364 8.3845 9.23322 8.55008 8.90001L12.0001 2.01001C12.4717 2.01585 12.9358 2.12818 13.3579 2.33861C13.7799 2.54903 14.149 2.85212 14.4375 3.22521C14.726 3.59831 14.9264 4.03177 15.0238 4.49321C15.1212 4.95465 15.1131 5.43214 15.0001 5.89001Z"
                                            fill={review.liked ? "#D86666" : "white"}
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {review.likes}
                                </span>

                                <span onClick={() => toggleDislike(review.id)} style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M7.3335 14.01V2.01001V14.01Z" fill="#D86666" />
                                        <path d="M7.3335 14.01V2.01001" stroke="#C7C7C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.3336 18.13L14.3336 14.01H20.1636C20.4741 14.01 20.7803 13.9377 21.058 13.7989C21.3357 13.66 21.5773 13.4584 21.7636 13.21C21.9499 12.9616 22.0758 12.6733 22.1313 12.3678C22.1869 12.0623 22.1705 11.7481 22.0836 11.45L19.7536 3.45001C19.6324 3.03458 19.3798 2.66965 19.0336 2.41001C18.6874 2.15037 18.2663 2.01001 17.8336 2.01001H4.33357C3.80314 2.01001 3.29443 2.22072 2.91936 2.5958C2.54429 2.97087 2.33357 3.47958 2.33357 4.01001V12.01C2.33357 12.5404 2.54429 13.0492 2.91936 13.4242C3.29443 13.7993 3.80314 14.01 4.33357 14.01H7.09357C7.46566 14.0102 7.83031 14.1142 8.14653 14.3103C8.46275 14.5064 8.718 14.7868 8.88357 15.12L12.3336 22.01C12.8052 22.0042 13.2693 21.8918 13.6914 21.6814C14.1134 21.471 14.4825 21.1679 14.771 20.7948C15.0595 20.4217 15.2599 19.9882 15.3573 19.5268C15.4547 19.0654 15.4466 18.5879 15.3336 18.13Z"
                                            fill={review.disliked ? "#D86666" : "white"}
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                    {review.dislikes}</span>

                            </div>
                        </div>

                    </div>

                    <div className={styles.ratingBadge}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11.3331 2.45483L13.3287 8.59681L19.7868 8.59681L14.5621 12.3928L16.5578 18.5347L11.3331 14.7388L6.10841 18.5347L8.10405 12.3928L2.87938 8.59681L9.33743 8.59681L11.3331 2.45483Z" fill="black" />
                        </svg>
                        {review.rating}
                    </div>

                </div>

                
            ))}
            {!showAllReviews && (
                <div className={styles.showMore} onClick={() => setShowAllReviews(true)}>
                    Show More
                </div>
            )}
        </>
    );
};

export default CustomerReview;

