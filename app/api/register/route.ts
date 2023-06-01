import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();

        const { email, username, password } = body;

        if (!email || !username || !password) return new NextResponse('Missing Info', { status: 400 });

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (user) return new NextResponse('User already exists', { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                name: username
            }
        });

        return NextResponse.json(newUser)
    } catch (error) {
        console.log('SIGNUP_ERROR', error)
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}