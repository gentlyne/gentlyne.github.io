import { Dropdown, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { logout } from 'src/entities/user/model/authSlice';
import { useAppDispatch, useProfile } from 'src/hooks';

import { UserAvatar } from 'src/entities/profile/ui/UserAvatar';
import React from 'react';
import { baseApi } from 'src/shared/api/baseApi';
import { useTranslation } from 'react-i18next';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { profile } = useProfile();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: t(`profile.title`),
      onClick: () => navigate('/profile'),
    },
    {
      key: 'changePassword',
      label: t(`auth.reset.title`),
      onClick: () => navigate('/changePassword'),
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
        <UserAvatar profile={profile} />

        <Typography.Text>{profile?.email}</Typography.Text>
      </Space>
    </Dropdown>
  );
};
