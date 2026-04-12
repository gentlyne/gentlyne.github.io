import React from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const AuthMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Space>
      <Link to="/signin">
        <Button icon={<LoginOutlined />} type="primary">
          {t(`auth.signin.title`)}
        </Button>
      </Link>

      <Link to="/signup">
        <Button icon={<UserAddOutlined />} type="default">
          {t(`auth.signup.title`)}
        </Button>
      </Link>
    </Space>
  );
};
