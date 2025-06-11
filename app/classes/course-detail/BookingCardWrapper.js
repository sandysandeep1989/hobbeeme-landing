"use client"

import BookingCard from './Bookingcard'

export default function BookingCardWrapper({ seats, setSeats, handleBookNow, searchParams }) {
    return (
        <BookingCard 
            seats={seats}
            setSeats={setSeats}
            handleBookNow={handleBookNow}
            searchParams={searchParams}
        />
    )
} 