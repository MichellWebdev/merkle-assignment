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

  return (
    <p>
      by: {userId} (Karma: {user.karma})
    </p>
  );
};
