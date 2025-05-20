import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phoneNumber: string;
    } & DefaultSession["user"]
  }
  
  interface User extends DefaultUser {
    phoneNumber: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    phoneNumber: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        phoneNumber: { label: "Phone Number", type: "tel" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        // Allow any login
        return {
          id: "1",
          name: "Test User",
          email: credentials?.email || "test@example.com",
          phoneNumber: credentials?.phoneNumber || "+1234567890",
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.phoneNumber = token.phoneNumber;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST }; 