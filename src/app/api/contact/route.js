import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                {message: "All fields required"},
                {status: 400}
            );
        }

        await connectDB();

        await Contact.create({
            name,
            email,
            message,
        });

        return NextResponse.json({message: "Message saved"});

    } catch (error) {
        return NextResponse.json(
            {message: "Server error"},
            {status: 500}
        );
    }
}