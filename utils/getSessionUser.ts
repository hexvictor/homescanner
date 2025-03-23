'use server';
import { getServerSession, type Session } from 'next-auth';
import { authOptions } from './authOptions';

export type SessionUser = Session['user'] & {
  id?: string;
};

export default async function getSessionUser(): Promise<SessionUser | null> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }
  return session.user;
}
