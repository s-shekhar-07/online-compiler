import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { language, version, files, stdin } = body;

        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                language,
                version,
                files,
                stdin,
            }),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Error executing code", error: error.message },
            { status: 500 }
        );
    }
}
