import { Layout } from 'antd';
import React from 'react';

import { AppHeader } from 'src/widgets/header/AppHeader';
import { AppSidebar } from '../sidebar/AppSidebar';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar />

      <Layout>
        <AppHeader />

        <Content
          style={{
            padding: 24,
          }}
        >
          <main style={{ padding: 20 }}>
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};
