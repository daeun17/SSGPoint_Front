import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "SSGPOINT",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // fetch user from db 지금은 더미 데이터
                const user = { id: 1, name: "park", password: "awdfaf", email: "awdfaf@kakao.com"}
                if (user) {
                    if (user.name === credentials?.username && user.password === credentials?.password) {
                        const res = { id: user.id, name: user.name, email: user.email }
                        console.log(res)
                        return res
                    }
                    return null
                }
            }
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
      }
}  