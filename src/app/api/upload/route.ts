import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { upload_limit } from "../../../../settings";

function randomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export async function POST(req: NextRequest) {
    if (process.env["API_KEY"] === undefined) {
        return NextResponse.json({
            error: "Please set a custom API KEY in vercel's environment variables.",
        }, { status: 500 })
    }

    if (req.headers.get("Authorization") !== `Bearer ${process.env["API_KEY"]}`) {
        return NextResponse.json({
            error: "Unauthorized",
        }, { status: 401 })
    }

    const files = await req.formData();
    const file = files.get("file") as Blob;

    if (!file) {
        return NextResponse.json({
            error: "No file found",
        }, { status: 400 })
    }
    
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
        return NextResponse.json({
            error: "Only PNG or JPEG files are allowed.",
        }, { status: 400 });
    }
    
    if (file.size > upload_limit * 1024 * 1024) {
        return NextResponse.json({
            error: `File size exceeds the allowed limit of ${upload_limit}MB.`,
        }, { status: 400 });
    }    

    const file_name = randomString(10);
    const file_extension = file.type.split("/")[1];
    const { url } = await put(file_name + "." + file_extension, file, { access: 'public' });

    return NextResponse.json({
        url: process.env.NODE_ENV == "development" ? `http://localhost:3000/${file_name}` : `https://${req.nextUrl.host}/${file_name}`,
        thumbnail_url: url,
    });
}