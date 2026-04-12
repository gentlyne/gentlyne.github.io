import React from 'react';
import { Card, type FormInstance, Spin } from 'antd';
import { useGetProfileQuery, useUpdateProfileMutation } from 'src/entities/profile/api';
import { handleServerErrors } from 'src/shared/lib/forms/handleServerErrors';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';
import { ProfileFormWrapper } from 'src/features/wrappers';
import { ProfileFormValues } from 'src/features/forms/ProfileForm';

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

  const handleSubmit = async (values: ProfileFormValues, form?: FormInstance) => {
    try {
      await updateProfile({ name: values.name }).unwrap();
      message.success(t(`forms.ProfileForm.updated`));
    } catch (err) {
      handleServerErrors(err, t, message, form);
    }
  };

  return (
    <Card title={t(`profile.title`)} style={{ maxWidth: 600, margin: '50px auto' }}>
      <ProfileFormWrapper initialValues={profile} onSubmit={handleSubmit} disabled={updating} />
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
