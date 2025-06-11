import React,{useState,useRef,useEffect} from 'react';
import styles from './tallPerfArts.module.css';

import Servicies from './class/Servicies';
import About from './About';
import CapturedMoments from './class/CapturedMoments';
import Rating from './class/Rating';

export default function TallPerformingArts() {

  const [activeTab, setActiveTab] = useState(1); // 'Services' is at index 1
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  const componentsMap = {
    About: <About />,
    Services: <Servicies />,
    Gallery: <CapturedMoments />,
    Ratings: <Rating />,
  };

  const tabsList = ['About','Services',  'Gallery', 'Ratings'];

  useEffect(() => {
    const current = tabRefs.current[activeTab];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft,
        width: current.offsetWidth,
      });
    }
  }, [activeTab]);

  // ...rest of your component code...
} 