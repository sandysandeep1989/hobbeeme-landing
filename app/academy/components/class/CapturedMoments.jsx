'use client'; 

import React from 'react'
import styles from './captured.module.css';
import dynamic from 'next/dynamic';
const Masonry = dynamic(() => import('react-masonry-css'), { ssr: false });

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  768: 3,
};

const mediaItems = [
  { type: 'image', src: '/class/CM1.png' },
  { type: 'image', src: '/class/CM2.png' },
  { type: 'video', src: '/class/video1.mp4' },
  { type: 'image', src: '/class/CM3.png' },
  { type: 'video', src: '/class/video1.mp4' },
  { type: 'image', src: '/class/CM4.png' },
  { type: 'image', src: '/class/CM5.png' },
  { type: 'image', src: '/class/CM6.png' },
  { type: 'image', src: '/class/CM7.png' },
  { type: 'image', src: '/class/CM8.png' },
  { type: 'image', src: '/class/CM9.png' },
  { type: 'image', src: '/class/CM9.1.png' },
  { type: 'image', src: '/class/CM10.png' },
  { type: 'image', src: '/class/CM11.png' },
  { type: 'image', src: '/class/CM12.png' },
  { type: 'image', src: '/class/CM13.png' },
  { type: 'image', src: '/class/CM14.png' },
  { type: 'image', src: '/class/CM15.png' },
  { type: 'image', src: '/class/CM16.png' },
  { type: 'image', src: '/class/CM17.png' },
  { type: 'image', src: '/class/CM18.png' },
  { type: 'image', src: '/class/CM19.png' },
  { type: 'image', src: '/class/CM20.png' },
  { type: 'image', src: 'class/CM21.png' },
  { type: 'image', src: '/class/CM22.png' },
  { type: 'image', src: '/class/CM9.1.png' },
  { type: 'image', src: '/class/CM5.png' },
];

const CapturedMoments = () => {
  return (
    <>
      <div className={''}>
        <div className="">
          <h2 className={styles.title}>Captured Moments</h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {mediaItems.map((item, index) => (
              <div key={index} className={styles.imagesCardParent}>
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`img-${index}`}
                    className="w-full block rounded-xl"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                ) : (
                  <div className={styles.videoContainer}>
                    <div className={styles.playButton}>
                      <img src="/class/playButton.svg" alt="play" />
                    </div>
                 
                  <video
                    src={item.src}
                  
                    loop
                    muted
                    className="w-full block rounded-xl"
                    style={{ objectFit: 'cover', width: '100%' }}
                    onMouseEnter={e => e.currentTarget.play()}
                    onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                     </div>
                )}
              </div>
            ))}
          </Masonry>
        </div>
      </div>
      <div className={styles.loadMoreButtonContainer}>
        <button className={styles.loadMoreButton}>
          Load More
        </button>
      </div>
    </>
  )
}

export default CapturedMoments
