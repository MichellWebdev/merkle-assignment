import React, { useState, useEffect } from 'react';
import { getUser } from '../../services/userApi';

export interface UserItem {
  karma: number;
  id: string;
}

interface UserProps {
  userId: string;
  userItem?: UserItem;
}

export const User = ({ userId, userItem }: UserProps) => {
  const [user, setUser] = useState({ ...userItem });

  useEffect(() => {
    getUser(userId).then(data => data && data.id && setUser(data));
  }, []);

  console.log('user', user);

  return (
    <>
      <p>Posted by: {userId}</p>
      <p>Karma: {user.karma}</p>
    </>
  );
};
