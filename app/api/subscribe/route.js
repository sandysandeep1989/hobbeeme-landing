import { sendMail } from "@/lib/mail";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), {
                status: 400,
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email format' }), {
                status: 400,
            });
        }

        const textContent = `
New Subscription Request

Email: ${email}
Date: ${new Date().toLocaleString()}
        `;

        await sendMail({
            email,
            subject: 'New Website Subscription',
            text: textContent,
        });

        return new Response(JSON.stringify({ success: true }));
    } catch (err) {
        console.error('Error in subscribe:', err);
        
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
            error: 'Something went wrong while processing your subscription',
            details: err.message 
        }), {
            status: 500,
        });
    }
} 