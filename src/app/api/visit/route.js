// import { connectDB } from "@/lib/db";
// import Visitor from "@/models/Visitor";
// import { NextResponse } from "next/server";
 
// export async function GET() {
//     try {
//         await connectDB();

//         let visitor = await Visitor.findOne();

//         if (!visitor) {
//             visitor = await Visitor.create({ count: 1});
//         } else {
//             visitor.count += 1;
//             await visitor.save();
//         }

//         return NextResponse.json({count: visitor.count});

//     } catch (error) {
//         console.error("VISIT API ERROR:", error);
//         return NextResponse.json({message: error.message}, {status: 500});
//     }
// }