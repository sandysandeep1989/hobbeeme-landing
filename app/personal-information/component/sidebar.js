"use client"
import React, { useState } from 'react';
import styles from './SidebarProfile.module.css';
import Image from 'next/image';
import { BookingIcon, BuildYourCircleIcon, HelpIcon, LogoutIcon, ProfileIcon, ReferalIcon, WalletIcon, WhislistIcon } from './sidebaricons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarProfile = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const navItems = [
    { path: '/personal-information', icon: <ProfileIcon />, label: 'Profile' },
    { path: '/bookings', icon: <BookingIcon />, label: 'Bookings' },
    { path: '/build-your-circle', icon: <BuildYourCircleIcon />, label: 'Build Your Circle' },
    { path: '/saved-collections', icon: <WhislistIcon />, label: 'Wishlist' },
    { path: '/referral-program', icon: <ReferalIcon />, label: 'Referral' },
    { path: '/my-wallet', icon: <WalletIcon />, label: 'My Wallet' },
    { path: '/support', icon: <HelpIcon />, label: 'Help Center' },
    { path: '/logout', icon: <LogoutIcon />, label: 'Logout' }
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={`d-flex flex-column align-items-center ${styles.sidebar}`}>
      <div className="text-center mb-4">
        <Image
          src="/profile-account.png"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-circle"
        />
        <p className="mt-3 fw-bold text-white mb-0">Hello Anay</p>
        <p className="fw-semibold">Welcome TO <span className={styles.hobeeYello}>Hobbeeme!</span></p>
      </div>

      <div className={`w-100 mb-4 px-2 py-3 ${styles.scoreCard}`}>
        <div className="d-flex justify-content-between align-items-center ">
          <span className="fw-bold text-white"><Image src='/hobeeme-account.png' width={146} height={28} alt='' style={{ maxWidth: '100%' }} /> </span>
          <span className={styles.sizeBig}>233</span>
        </div>
        <div className={`text-white ${styles.smtxt}`}>Earn 200 more points to get 50 AED cashback 
          <Image src='/cashback.png' width={36} height={31} alt=''/>
        </div>
        <div className={styles.progress}><span style={{width:"60%"}}></span></div>
      </div>

      <ul className="list-unstyled w-100 px-2">
        {navItems.map((item) => (
          <li 
            key={item.path}
            className={`mb-3 ${styles.navItem} ${activeLink === item.path ? styles.active : ''}`}
          >
            <Link
              href={item.path}
              className="d-flex align-items-center"
              onClick={() => handleLinkClick(item.path)}
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarProfile;
