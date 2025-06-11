'use client'

import { React, useEffect, useRef, useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'


import { usePathname } from 'next/navigation';
import Image from 'next/image'
import {
  Arrow, MenuArrow, ArrowDownMenu, Notification, SearchIcon,
  DetectIcon
} from './icons'
import Notifications from './notifications';
import SearchHeader from './search';
import AccountMenu from './accountMenu';
import { MoveLeft } from 'lucide-react';


const menuItems = [
  'Arts & Entertainment',
  'Cooking & Tasting',
  'Sports & Wellness',
  'Kids & Family',
  'Life Skills',
  'Business & Career',
];

const menuItems2 = [
  'Drawing',
  'Painting',
  'Diy',
  'Pottery',
  'Resin',
  'Others',
];
const MenuItems2Img = [
  '/drawing-icon.png',
  '/painting-icon.png',
  '/diy-icon.png',
  '/pottery-icon.png',
  '/resien-icon.png',
  '/other-icon.png',
]


const locationOptions = [
  ['dubai', { name: ['Dubai', '/dubai-sr.png'] }],
  ['bur-dubai', { name: ['Bur Dubai', '/bur-dubai.png'] }],
  ['jumeirah', { name: ['Jumeirah', '/jumeirahsr.png'] }],
  ['business-bay', { name: ['Business Bay', '/business-bay-sr.png'] }],
  ['dubai-marina', { name: ['Dubai Marina', '/dubari-marina-sr.png'] }],
  ['al-quoz', { name: ['Al Quoz', '/al-quriz-sr.png'] }],
  ['mirdif', { name: ['Mirdif', '/mirdif-sr.png'] }],
  ['international-city', { name: ['International City', '/international-city-sr.png'] }],
  ['jebel-ali', { name: ['Jebel Ali', '/jebel-all-sr.png'] }]
];

const categories = [
  "Art & Craft",
  "Music",
  "Dance",
  "Sports & Fitness",
  "Wellness & Lifestyle",
  "Food & Culinary",
  "Digital Skills",
  "Development",
  "Other Skills"
];

export default function Header() {


  const pathname = usePathname();
  const isHome = pathname === '/';

  const [userLogin, setUserLogin] = useState(true);
  const buttonRef = useRef(null);

  const [menu, setMenu] = useState(false);
  const [subMeun, setSubMenu] = useState('');
  const [subSubMenu, setSubSubMenu] = useState('');

  const [scrolled, setScrolled] = useState(false);
  const [locPop, setLocPop] = useState(false);

  const [notificanPops, setNotificanPops] = useState(false);


  const [locValue, setLocValue] = useState('dubai')
  const [city, setCity] = useState('Bur Dubai');
  const [locationSelectedManually, setLocationSelectedManually] = useState(false);
  const [hoveIndex, setHoverIndex] = useState(categories[0]);
  const [searchPop, setSearchPop] = useState(false);

  const getLoc = (val) => {
    setLocValue(val);
    setLocationSelectedManually(true);
    setCity(''); // Clear auto-detected city
    setLocPop(false); // toggles true/false on each click

  }

  const Merged = menuItems2.map((name, index) => (
    {
      name,
      imageUrl: MenuItems2Img[index],
    }
  ))




  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            const address = data.address;
            const detectedCity =
              address.city || address.town || address.village || address.state;

            if (!locationSelectedManually && detectedCity) {
              setCity(detectedCity);
            }
          });
      },
      () => {
        console.log('Location permission denied');
      }
    );
  }, [locationSelectedManually]);



  const toggleMenu = () => {
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.toggle(styles.opened);
      btn.setAttribute('aria-expanded', btn.classList.contains(styles.opened));
      setMenu(prev => !prev);
      setSubMenu('');
    }
  };

  const menuFuc = (val) => {
    setSubMenu(prev => (prev === val ? null : val));
  }

  const menuSubFuc = (val) => {
    setSubSubMenu(prev => (prev === val ? null : val));
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 62) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };

  }, [])

  useEffect(() => {
    const html = document.documentElement;
    if (menu) {
      document.body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      html.style.overflow = 'auto';
    }
  }, [menu]);



  const searchFun = () => {
    setSearchPop(true); // toggles true/false on each click
    // setTimeout(() => setSearchPop(false), 10);
  }

  const showPopLoc = () => {
    setLocPop(true); // toggles true/false on each click
    // setTimeout(() => setSearchPop(false), 10);
  }



  const handleNotificationPop = () => {
    setNotificanPops(prev => !prev); // toggles true/false on each click

  }

  useEffect(() => {
    setNotificanPops(false);
  }, []);


  const notHideMb = () => {
    setNotificanPops(false); // schedules update
    setTimeout(() => {
      setNotificanPops(false); // schedules update
    }, 100);
  };

  const menuClose = () => {
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.toggle(styles.opened);
      btn.setAttribute('aria-expanded', btn.classList.contains(styles.opened));
      setMenu(prev => !prev);
      setSubMenu('');
      // router.push('')
    }
  }




  return (
    <div id={!isHome ? styles.insideHome : ''} >
      <div className={menu || scrolled ? `${styles.header} ${styles.active}` : styles.header}>
        <div className={styles.logo}>
          <Link href='/'><Image src='/logo.webp' width={165} height={49} alt='' /></Link>
        </div>


        <div className={styles.headerMenuWrapper}>
          <div className={styles.headerMenu}>
            <ul>
              {/* <li><Link href=''>Classes <Arrow></Arrow></Link>
            
            <div className={styles.menuContainer}   onMouseLeave={() => setHoverIndex(categories[0])}>
               {categories.map((cat, ind) =>(
                 <div className={hoveIndex  ===  cat ? `${styles.column} ${styles.active}` : `${styles.column}` }
                    onMouseEnter={() => setHoverIndex(cat)}
                    key={ind} 
                  >
                    <h4 className={styles.heading}>{cat} <Arrow></Arrow></h4>
                     <ul className={styles.list}>
                      {Merged.map((item, idx) => (
                        <li key={idx}  >
                          <Link href='/classes'>
                          <Image src={item.imageUrl} width={40} height={40} alt=''></Image>
                          <div>{item.name} </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

               ))}
                
                 

                    
                
         </div>

             </li> */}
              {/* <li><Link href='/experience'>Experiences </Link>
             <div className={styles.menuContainer} >
                
                 {[...Array(3)].map((_, colIdx) => (
                  <div  className= {hoveIndex  === colIdx  ? `${styles.column} ${styles.active}` : `${styles.column}` }    key={colIdx}
                  >
                    <h4 className={styles.heading}>{colIdx} Family Adventures</h4>
                     <ul className={styles.list}>
                      {menuItems2.map((item, idx) => (
                        <li
                        key={idx}
                        className={`${styles.item} ${
                          colIdx === 0 && idx === 0 ? styles.active : ''
                        }`}

                        
                        >
                          <Link href=''>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                </div> 
            </li> */}
              <li><Link href='/plan-a-event'>Plan An Event</Link></li>
              <li><Link href='/offer-landing'>Offer Services</Link></li>
              {/* <li><Link href='/gift-card'>Gift Card</Link></li> */}
            </ul>


          </div>
        </div>


        <div className={styles.logedMenu}>

          <div className={`${styles.locationOrl} ${!locPop ? styles.hide : ''}`} onClick={() => { setLocPop(false) }}></div>

          <div className={styles.location}>
            <div className={styles.dropdown} onClick={() => { showPopLoc() }}>
              {!locationSelectedManually && city && (
                <span>{city}</span>
              )}

              {locationSelectedManually && locValue && (
                <span>
                  {locationOptions.find(([key]) => key === locValue)?.[1].name[0].length > 10
                    ? locationOptions.find(([key]) => key === locValue)[1].name[0].slice(0, 10) + '..'
                    : locationOptions.find(([key]) => key === locValue)[1].name[0]}
                </span>)}

              <ArrowDownMenu /> </div>
            <div className={`${styles.locationBox} ${locPop ? styles.active : ''}`}>


              <div className={styles.searchArea}>
                <input type='text' val="" placeholder="Search for your Area" />
                <button type='submit'><MenuArrow /></button>
              </div>


              <div className={styles.delectLoc}>   <DetectIcon /> Detect my location</div>

              <div className={styles.detectSep}></div>

              <div className={styles.active}>
                <h3> POPULAR AREAS</h3>

                <ul>
                  {locationOptions.map(([key, label]) => (
                    <li key={key} onClick={() => getLoc(key)}>
                      <Image src={label.name[1]} alt='' width={50} height={50} />
                      {label.name[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.search} onClick={() => searchFun()}>
            <SearchIcon />
          </div>
          <SearchHeader setSearchPop={setSearchPop} searchPop={searchPop} />

          {/* {userLogin &&
            <div className={styles.notification} onClick={() => { handleNotificationPop() }}>
              <span className={styles.No}>2</span>
              <span className={styles.bg}><Notification /></span>
              <div className={`${styles.notwrap}  ${notificanPops ? styles.active : ''}`}>
                <div className={styles.mobileNotArrow} onClick={() => notHideMb()}> <MoveLeft /> </div>
                <Notifications /></div>
            </div>}

          <div className={`${styles.notoverlay}  ${!notificanPops ? styles.hide : ''}`} onClick={() => notHideMb()} ></div>
          {userLogin && <AccountMenu />} */}
        </div>



        {!userLogin &&
          <div className={styles.menuBtn}>
            <Link href='/login'>Log In <MenuArrow></MenuArrow></Link>
          </div>
        }



        <button
          ref={buttonRef}
          className={styles.menu}
          onClick={toggleMenu}
          aria-label="Main Menu"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path stroke="#fff" className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path stroke="#fff" className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
            <path stroke="#fff" className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>

        <div className={menu ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu}>
          <div className={styles.mobileMenuItem}>
            <div className={styles.head} onClick={() => menuFuc('classes')}>Classes <span className={subMeun === 'classes' ? styles.active : ''}><ArrowDownMenu /></span></div>
            <ul className={subMeun === 'classes' ? styles.active : ''}>
              <li><Link href='' onClick={() => menuSubFuc('ART & CRAFTS')}> ART & CRAFTS <span>{subSubMenu === 'ART & CRAFTS' ? '-' : '+'}</span></Link>
                <ul className={subSubMenu === 'ART & CRAFTS' ? styles.active : ''}>
                  <li  ><Link onClick={() => { menuClose() }} href='/classes'> DRAWING</Link></li>
                  <li  ><Link onClick={() => { menuClose() }} href='/classes'> PAINTING</Link></li>
                  <li ><Link onClick={() => { menuClose() }} href='/classes'> DIY</Link></li>
                  <li  ><Link onClick={() => { menuClose() }} href='/classes'> POTTERY</Link></li>
                  <li  ><Link onClick={() => { menuClose() }} href='/classes'> RESIN</Link></li>
                  <li ><Link href='/classes' onClick={() => { menuClose() }}> OTHER (If any)</Link></li>
                </ul>
              </li>
              <li><Link href=''> MUSIC</Link></li>
              <li><Link href=''>DANCE</Link></li>
              <li><Link href=''>SPORTS & FITNESS</Link></li>
              <li><Link href=''> WELLNESS & LIFESTYLE</Link></li>
              <li><Link href=''> FOOD & CULINARY</Link></li>
              <li><Link href=''> Kids & family</Link></li>
              <li><Link href=''> Life skills</Link></li>
              <li><Link href=''> DIGITAL SKILLS</Link></li>
              <li><Link href=''>OTHER SKILL & DEVELOPMENT</Link></li>
            </ul>
          </div>

          <div className={styles.mobileMenuItem}>
            <div className={styles.head} onClick={() => menuFuc('experiences')}>Experiences <span className={subMeun === 'experiences' ? styles.active : ''}><ArrowDownMenu /></span></div>
            <ul className={subMeun === 'experiences' ? styles.active : ''}>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Creative & Performing Arts</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}>Art, Culture & Expression</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Skill & Career Development</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Wellness & Lifestyle</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}>Food & Culinary</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Adventure & Outdoors</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Sports & Fitness</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}> Clubs & Community</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}>Kids & Teens Activities</Link></li>
              <li><Link href='/experience' onClick={() => { menuClose() }}>Online & Hybrid</Link></li>


            </ul>
          </div>

          <div className={styles.mobileMenuItem}>
            <div className={styles.head} ><Link onClick={() => { menuClose() }} href='/plan-a-event'>Plan An Event</Link></div>
            <div className={styles.head} ><Link onClick={() => { menuClose() }} href='/offer-services'>Offer Services</Link></div>
            <div className={styles.head} ><Link onClick={() => { menuClose() }} href='/gift-card'>Gift Card </Link></div>

          </div>


          <div className={`${styles.menuBtn} ${styles.mobileMain}`}>
            <Link href='/login'>Log In <MenuArrow></MenuArrow></Link>
          </div>

        </div>


      </div>
    </div>

  )
}
