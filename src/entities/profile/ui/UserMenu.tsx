import { Dropdown, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { logout } from 'src/features/auth/model/authSlice';
import { useAppDispatch } from 'src/app/hooks';

import { UserAvatar } from 'src/entities/profile/ui/UserAvatar';
import React from 'react';
import { baseApi } from 'src/shared/api/baseApi';
import { useProfile } from 'src/entities/profile/model/hooks';
import { useTranslation } from 'react-i18next';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { profile: user } = useProfile();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: t(`profile.title`),
      onClick: () => navigate('/profile'),
    },
    {
      key: 'logout',
      label: t(`auth.logout`),
      onClick: () => {
        dispatch(logout());
        dispatch(baseApi.util.resetApiState());
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space style={{ cursor: 'pointer' }}>
        <UserAvatar user={user} />

        <Typography.Text>{user?.email}</Typography.Text>
      </Space>
    </Dropdown>
  );
};
