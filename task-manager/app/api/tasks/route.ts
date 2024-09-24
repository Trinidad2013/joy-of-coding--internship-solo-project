import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import {PrismaClient} from '@prisma/client'
import TaskSchema from "@/app/validationSchemas"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
const body = await request.json()
const validation = TaskSchema.safeParse(body)
if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})
const newTask = await prisma.task.create({
    data: {title:body.title,description:body.description}
})

return NextResponse.json(newTask, {status: 201})
}