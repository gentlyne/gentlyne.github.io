import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileFormWrapper } from 'src/features/wrappers/ProfileFormWrapper';
import { useAppSelector } from 'src/hooks';

export const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const profile = useAppSelector((s) => s.auth.profile);

  return (
    <Card title={t(`profile.title`)} style={{ maxWidth: 600, margin: '50px auto' }}>
      <ProfileFormWrapper
        initialValues={{
          name: profile?.name ?? '',
          about: profile?.role ?? '',
        }}
      />
    </Card>
  );
};
