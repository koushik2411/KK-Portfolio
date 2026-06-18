import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json(
                {message: "All fields are required"},
                {status: 400}
            );
        }

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL,
            subject: `${name} contacted through your Portfolio`,
            html:`
            <h2>New Contact Through Portfolio</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>

            <p>${message}</p>
            `,
        });

        
        return Response.json(
            {message: "Message sent successfully"},
            {status: 200}
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            {message: "Failed to send message"},
            {status: 500}
        );
    }
}