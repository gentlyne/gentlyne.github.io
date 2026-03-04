import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { User } from '../../../entities/profile/types';

interface Props {
  user?: User;
}

export const UserAvatar = ({ user }: Props) => {
  if (!user) {
    return <Avatar icon={<UserOutlined />} />;
  }

  return <Avatar>{user.email[0].toUpperCase()}</Avatar>;
};
