'use client';

import { useSession, signIn } from 'next-auth/react';
import { JSX, useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    return (props: JSX.IntrinsicAttributes) => {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === 'unauthenticated') {
        signIn();
      }
    }, [status]);

    if (status === 'loading' || status === 'unauthenticated') {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
