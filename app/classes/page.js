"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import styles from './page.module.css'
import { AllIcon, ArtExpression, Community, CreativeArts, Culinary, Dance, DigitalSkill, Fitness, Wellness } from "../components/class-component/CategoriesIcon";
import { eventCardsData } from "../components/class-component/data/ClassEventCard";
import Header from "../components/header";
import Footer from "../components/footer";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "../components/experience-list/categories/Categories";
import FilterSideBar from "../components/experience-list/filters/FilterSidebar";
import EventCardGrid from "../components/experience-list/event-card/EventCardGrid";
import CalendarWithEvents from "../components/experience-list/calendar-events/CalendarwithEvents";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MobileCalendar from '../components/experience-list/calendar-events/MobileCalendar';
import MobileFilter from '../components/experience-list/filters/MobileFilter';

export default function Classes() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredEvents, setFilteredEvents] = useState(eventCardsData);
    const [showMobileCalendar, setShowMobileCalendar] = useState(false);
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'


    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredEvents(eventCardsData);
        } else {
            const filtered = eventCardsData.filter(
                (event) => event.category === selectedCategory
            );
            setFilteredEvents(filtered);
        }
    }, [selectedCategory]);

    const categories = [
        { label: "All", svg: AllIcon },
        { label: "Art & Craft", svg: ArtExpression },
        { label: "Music", svg: CreativeArts },
        { label: "Dance", svg: Dance },
        { label: "Sports & Fitness", svg: Fitness },
        { label: "Wellness & Lifestyle ", svg: Wellness },
        { label: "Food & Culinary", svg: Culinary },
        { label: "digital Skills", svg: DigitalSkill },
        { label: "Other Skills & Development", svg: Community },
    ];

    const pathname = usePathname();

    const isClasses = pathname === "/classes";
    const isExperiences = pathname === "/experience";

    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        const sortedEvents = [...filteredEvents].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.currentPrice - b.currentPrice;
            } else {
                return b.currentPrice - a.currentPrice;
            }
        });

        setFilteredEvents(sortedEvents);
    };
    return (
        <>
           
            <div className={styles.vendorList}>
            <Header />


                <Container className={styles.classListWrapping}>
                    <div className='breadCrumb'>
                        <div className={`CustomeContainer`}>
                            <ul>
                                <li><Link href='/'>Home</Link> <ChevronRight /></li>
                                <li >Classes</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.categoriesTabWrapping} >

                        {categories.map((data, idx) =>

                            <Categories
                                key={idx}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                label={data.label}
                                svg={data.svg}
                            />

                        )}
                    </div>
                    <Row className={styles.layoutWrapper}>
                        <Col className={`col-xxxl-2 col-md-padding-7 mob-size`}  lg={3} md={4}>

                        <div className={styles.stickySidebarWrapper}>
                            <div className={styles.scrollableSidebar}>
                                <FilterSideBar />
                            </div>
                        </div>
                        </Col>
                        <Col className={`col-xxxl-10 col-md-padding-7`}  lg={9} md={8}>
                            <Row>
                                <Col className={`col-xxxl-9 col-md-padding-6`} xxl={8} xl={8} lg={7} md={6}>
                                    <div className={styles.tabWrapping}>
                                        <div className={styles.tabs}>
                                            <Link href="/classes" style={{ width: '100%' }}>
                                                <button className={`${styles.tab} ${isClasses ? styles.activeTabs : ""}`}>
                                                    Classes
                                                </button>
                                            </Link>
                                            <Link href="/experience" style={{ width: '100%' }}>
                                                <button className={`${styles.tab} ${isExperiences ? styles.activeTabs : ""}`}>
                                                    Experiences
                                                </button>
                                            </Link>
                                        </div>

                                        {/* Mobile Calendar and Filter Buttons */}


                                    </div>
                                    <div className={styles.eventCardHead}>
                                        <div>Showing <span className={styles.filteredData}>12</span> of 21 Results</div>
                                        <div className={styles.shortBy} onClick={handleSort} style={{ cursor: 'pointer' }}>
                                        Sort by 
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="15"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                style={{ transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none' }}
                                            >
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.05384 16.5V4.35011L14.6874 9.9502L16.0957 8.5L8.04785 0.5L0 8.5L1.40833 9.89986L7.04187 4.35011V16.5H9.05384Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.05384 16.5V4.35011L14.6874 9.9502L16.0957 8.5L8.04785 0.5L0 8.5L1.40833 9.89986L7.04187 4.35011V16.5H9.05384Z" fill="white" />
                                            </svg>
                                        </span>
                                    </div>
                                    </div>
                                    <EventCardGrid events={filteredEvents} redirectTo='/classes' /></Col>
                                <Col className={`col-xxxl-3 col-md-padding-8 mob-size`} xxl={4} xl={4} lg={5} md={6}>
                                <div className={styles.stickyCalendar}>
                                    <CalendarWithEvents events={filteredEvents} />
                                </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <div className={styles.mobileButtons}>
                        <button onClick={() => setShowMobileCalendar(true)}>Calendar</button>
                        <button onClick={() => setShowMobileFilter(true)}>Filter</button>
                    </div>
                    {/* Mobile Calendar and Filter Components */}
                    {showMobileFilter && (
                        <div className={`${styles.mobileFilterContainer} ${showMobileFilter ? styles.open : ''}`}>
                            <MobileFilter onClose={() => setShowMobileFilter(false)} />

                        </div>
                    )}
                    {showMobileCalendar && (
                        <div className={`${styles.mobileCalendarContainer} ${showMobileCalendar ? styles.open : ''}`}>
                            <MobileCalendar events={filteredEvents} onClose={() => setShowMobileCalendar(false)} />
                        </div>
                    )}
                </Container>
                <Footer />
            </div>
            
        </>
    )
}