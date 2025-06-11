'use client'
import React from 'react'
import styles from "@/app/page.module.css";
import Header from './components/header';
import HeroSection from './components/home/heroSection';
import ConnectingPeople from './components/home/connectingPeople';
import ChooseVibe from './components/home/chooseVibe';
import OfferForYou from './components/home/offersforyou';
import FindFitForYou from './components/home/findfitforyou';
import RecommendedClass from './components/home/recommendedClass';
import RecommendedExp from './components/home/recommendedExp';
import SkipTheUsal from './components/home/skipTheUsal';
import StartForFree from './components/home/start-for-free';
import Discover from './components/home/discover';
import Faq from './components/home/faq';
import WhatOurCommunity from './components/home/what-our-community';
import Footer from './components/footer'


export default function HomePage(){
  return (
      <>
      <Header></Header> 
      <HeroSection></HeroSection>
      <ConnectingPeople/>
      <ChooseVibe/>
      <OfferForYou/>
      <FindFitForYou/>
      <RecommendedClass/>
      <RecommendedExp />
      <SkipTheUsal/>
      <StartForFree/>
      <Discover/> 
       <Faq/>
      <WhatOurCommunity/>
      <Footer/>

      </>
  )
}
