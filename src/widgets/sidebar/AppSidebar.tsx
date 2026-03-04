import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, WalletOutlined, UserOutlined } from '@ant-design/icons';

import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

export const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.token);
  const { t } = useTranslation();

  const items = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: t(`operation.name`),
    },
    {
      key: '/categories',
      icon: <WalletOutlined />,
      label: t(`category.name`),
    },
    !token
      ? null
      : {
          key: '/profile',
          icon: <UserOutlined />,
          label: t(`profile.title`),
        },
  ];

  return (
    <Sider width={220}>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={items}
        onClick={({ key }) => navigate(key)}
        style={{ height: '100%' }}
      />
    </Sider>
  );
};
