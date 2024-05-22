// app/page.tsx

'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <p>Welcome, {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>You are not signed in.</p>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </>
  );
}
