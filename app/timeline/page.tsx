'use client';

import { signOut } from 'next-auth/react';

const Timeline = () => {
  return (
    <div>
      Timeline
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Timeline;
