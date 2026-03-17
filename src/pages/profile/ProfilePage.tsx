import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileFormWrapper } from 'src/features/wrappers/ProfileFormWrapper';

export const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card title={t(`profile.title`)} style={{ maxWidth: 600, margin: '50px auto' }}>
      <ProfileFormWrapper
        initialValues={{
          name: '',
          about: '',
        }}
      />
    </Card>
  );
};
