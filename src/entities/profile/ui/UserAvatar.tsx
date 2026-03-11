import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { Profile } from '../types';

interface UserAvatarProps {
  profile?: Profile;
}

export const UserAvatar = ({ profile }: UserAvatarProps) => {
  if (!profile) {
    return <Avatar icon={<UserOutlined />} />;
  }

  return <Avatar>{profile.email[0].toUpperCase()}</Avatar>;
};
