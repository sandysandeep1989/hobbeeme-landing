'use client'
import React from 'react';
import Header from '@/app/components/header';

import Footer from '@/app/components/footer';
import styles from './academy.module.css'
import TallPerformingArts from './TallPerformingArts';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AcademyPage() {
    return (
        <>
            <Header />
            <section className={styles.academyPageSection}>
                <div className='container'>
                <div className='breadCrumb'>
                        <div className={`CustomeContainer`}>
                            <ul>
                                <li><Link href='/'>Home</Link> <ChevronRight /></li>
                                <li >Classes <ChevronRight /></li>
                                <li>Academy</li>
                            </ul>
                        </div>
                    </div>
                    <TallPerformingArts />
                </div>
            </section>
            <Footer />
        </>
    )
}