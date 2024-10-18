import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";



export async function POST(request: NextRequest) {
    // get the request body
    const body = await request.json()

    // Run validation via ZOD schema
    const validation = schema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    const newProject = await prisma.project.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newProject, {status: 200})
}
