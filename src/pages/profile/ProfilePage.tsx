import React from 'react';
import { Card, type FormInstance, Spin } from 'antd';
import { useGetProfileQuery, useUpdateProfileMutation } from 'src/features/auth/model/authApi';
import { ProfileForm } from 'src/entities/profile/ui/ProfileForm';
import { handleServerErrors } from 'src/shared/lib/forms/handleServerErrors';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';

export const ProfilePage: React.FC = () => {
  const { data: profile, isLoading: loadingProfile } = useGetProfileQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();
  const { t } = useTranslation();
  const message = useMessage();

  if (loadingProfile) {
    return <Spin description={t(`forms.ProfileForm.loading`)} style={{ display: 'block', marginTop: 100 }} />;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  const handleSubmit = async (name: string, form?: FormInstance) => {
    try {
      await updateProfile({ name: name }).unwrap();
      message.success(t(`forms.ProfileForm.updated`));
    } catch (err) {
      handleServerErrors(err, t, message, form);
    }
  };

  return (
    <Card title={t(`profile.title`)} style={{ maxWidth: 600, margin: '50px auto' }}>
      <ProfileForm profile={profile} onSubmit={handleSubmit} loading={updating} />
      <div style={{ marginTop: 20 }}>
        <strong>{t(`forms.ProfileForm.email`)}:</strong> {profile.email}
        <br />
        <strong>{t(`forms.ProfileForm.signup.date`)}:</strong> {new Date(profile.signUpDate).toLocaleDateString()}
        <br />
        <strong>Command ID:</strong> {profile.commandId}
      </div>
    </Card>
  );
};
