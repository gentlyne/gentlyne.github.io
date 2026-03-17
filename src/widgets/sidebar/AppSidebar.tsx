import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, GroupOutlined, TransactionOutlined } from '@ant-design/icons';

import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

export const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const items = [
    {
      key: '/',
      icon: <TransactionOutlined />,
      label: t(`operation.name`),
    },
    {
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
