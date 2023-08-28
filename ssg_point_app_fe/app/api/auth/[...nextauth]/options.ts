import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                loginId: { label: "loginId", type: "text", placeholder: "SSGPOINT" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {

                if (!credentials?.loginId || !credentials?.password) return null

                const user = { id: 1, loginId: "7eom13", password: "1234", email: "awdfaf@kakao.com" }
                if (user) {
                    if (user.loginId === credentials?.loginId && user.password === credentials?.password) {
                        const res = { id: user.id, name: user.loginId, email: user.email }
                        console.log(res)
                        return res
                    }
                    return null
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}  