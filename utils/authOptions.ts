import connectDB from '@/config/database';
import User, { type IUser } from '@/models/User';
import { debug } from 'console';
import { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // 1. Check if profile exists
      if (!profile) {
        return 'No profile found'; // Reject login with a message
      }

      // 2. Connect to the database
      await connectDB();

      // 3. Check if user exists
      const user = await User.findOne({ email: profile?.email }).lean<IUser>();
      console.log(user);

      // 4. If not, create user
      if (!user) {
        // Truncate username if too long
        const username = profile?.name?.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile?.image,
        });
      }
      // 5. Allow login
      return true;
    },
    async session({ session }) {
      // 1. Check if session exists
      if (!session) {
        debug('No session found');
        return session;
      }
      // 2. Connect to the database

      await connectDB();
      // 3. Get user from database
      const user = await User.findOne({ email: session?.user?.email });
      return { ...session, id: user?._id?.toString() };
    },
  },
};
