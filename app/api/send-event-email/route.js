import { sendMail } from '@/lib/mail';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { 
            fullName, 
            email, 
            phone, 
            eventType, 
            guests, 
            date, 
            message, 
            companyName 
        } = body;

        // Validate required fields
        if (!fullName || !email || !phone || !eventType || !guests || !date) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Format the date
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Create email content
        const emailContent = `
            <h2>New Event Request</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Event Type:</strong> ${eventType}</p>
            ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ''}
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Event Date:</strong> ${formattedDate}</p>
            ${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ''}
        `;

        // Send email
        await sendMail({
            subject: `New Event Request: ${eventType}`,
            html: emailContent
        });

        return NextResponse.json(
            { message: 'Event request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending event email:', error);
        return NextResponse.json(
            { error: 'Failed to send event request' },
            { status: 500 }
        );
    }
} 