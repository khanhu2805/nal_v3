import type {NextAuthOptions} from 'next-auth';
import Credentials from 'next-auth/providers/credentials'
import prisma from '@/app/prismadb'
import axios from 'axios';


export const options: NextAuthOptions = {
    providers: [
        Credentials({
            name:'Credentials',
            credentials: {
                phone: {
                    label: 'Số điện thoại',
                    type: 'text',
                    placeholder: ''
                },
                password: {
                    label: 'Mật khẩu',
                    type: 'text',
                    placeholder: ''
                }
            },
            async authorize(credentials){
                if (!credentials?.phone || !credentials?.password) {
                    throw new Error(`Invalid credentials`);
                }
                const user = await prisma.user.findUnique({
                    where:{
                        phone: credentials.phone
                    }
                })
                if (!user || !user?.password) {
                    throw new Error(`Invalid credentials`);
                }
                const isCorrect = (credentials.password == user.password)
                if (!isCorrect) {
                    throw new Error(`Invalid credentials`);
                }
                return user;
            }
        })
    ],
    pages: {
        //signIn:'/sign_in',
        //error:'/sign_in',
    },
    callbacks: {
        session:async ({session, token, user}) =>{
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session
        },
        jwt: async ({user, token}) => {
            if (user) {
                token.uid = user.id
            }
            return token
        }
    },
    session: {
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV ==='development'
}