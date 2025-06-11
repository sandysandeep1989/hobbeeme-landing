// app/api/send-listing-email/route.js

import { sendMail } from "@/lib/mail";

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            contact,
            businessName,
            services,
            serviceDescriptions,
            category,
            acceptTerms
        } = body;

        if (!acceptTerms) {
            return new Response(JSON.stringify({ error: 'Terms must be accepted' }), {
                status: 400,
            });
        }

        // Create a formatted list of selected services with their descriptions
        const servicesList = Object.entries(services)
            .filter(([, isSelected]) => isSelected)
            .map(([service]) => {
                const description = serviceDescriptions[service] || 'No description provided';
                return `${service.charAt(0).toUpperCase() + service.slice(1)}:\n${description}`;
            })
            .join('\n\n');

        const textContent = `
Name: ${name}
Email: ${email}
Contact: ${contact}
Business: ${businessName}
Category: ${category}

Selected Services and Descriptions:
${servicesList}


        `;

        await sendMail({
            email,
            subject: 'New Listing Submission',
            text: textContent,
        });

        return new Response(JSON.stringify({ success: true }));
    } catch (err) {
        console.error('Error in send-listing-email:', err);
        
        // Check for specific error types
        if (err.code === 'EAUTH') {
            return new Response(JSON.stringify({ 
                error: 'Email authentication failed. Please check your SMTP credentials.' 
            }), {
                status: 500,
            });
        }
        
        if (err.code === 'ESOCKET') {
            return new Response(JSON.stringify({ 
                error: 'Could not connect to email server. Please check your SMTP host configuration.' 
            }), {
                status: 500,
            });
        }

        return new Response(JSON.stringify({ 
            error: 'Something went wrong while sending the email',
            details: err.message 
        }), {
            status: 500,
        });
    }
}
