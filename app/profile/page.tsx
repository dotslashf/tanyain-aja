'use client';

import { signOut } from 'next-auth/react';

const Profile = () => {
  return (
    <div>
      Profile
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Profile;
