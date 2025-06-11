'use client'
import React from 'react'
import VendorHeader from '../components/VendorHeader'
import VendorFooter from '../components/VendorFooter'
import { MultiStepProvider } from '@/app/utils/MultiStepContext'

const layout = ({children}) => {
  return (
    <MultiStepProvider>
      <div style={{height :"100vh", background :"#fff"}}>
        <VendorHeader />

          {children}
    <div style={{position :"fixed", bottom :"0", width :"100%", background :"#fff"}}>
        <VendorFooter />
    </div>
      </div>
    </MultiStepProvider>
  )
}

export default layout
