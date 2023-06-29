import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import TwitterProvider from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/app/libs/prisma';

const adapter = PrismaAdapter(prisma);
// @ts-ignore
adapter.createUser = async (data) => {
    console.log('CREATE_USER', data);
    return await prisma.user.create({
        // @ts-ignore
        data
    });
}

export const authOptions: AuthOptions = {
    adapter,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'text',
                },
                password: {
                    label: 'password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) throw new Error('Invalid credentials');

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user?.password || !user) throw new Error('Invalid credentials');

                const isValidPassword = await bcrypt.compare(credentials.password, user.password);

                if (!isValidPassword) throw new Error('Invalid credentials');

                return user;
            }
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
            version: '2.0',
            profile({ data }) {
                return {
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    email: null,
                    image: data.profile_image_url,
                }
            },
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }