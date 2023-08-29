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
            async authorize(credentials, req) {

                if (!credentials?.loginId || !credentials?.password) return null

                const res = await fetch("https://smilekarina.duckdns.org/api/v1/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        loginId: credentials?.loginId,
                        password: credentials?.password,
                    })
                })

                const user = await res.json()

                if (res.ok && user) {
                    console.log(user)
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
    ],
    // 임시 나중에 .env로 옮기기
    secret: "qwer1234",

    callbacks: {


        // async jwt({ token, user }) {
        //     // return { ...token, ...user };
        //     return token;
        // },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },

        async redirect({ url, baseUrl }) {
            console.log("Redirect URL:", url);
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    pages: {
        // signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}  