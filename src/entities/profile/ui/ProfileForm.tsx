import React from 'react';
import { Form, Input, Button, type FormInstance } from 'antd';
import type { Profile } from '../model/types';
import { useTranslation } from 'react-i18next';

interface ProfileFormProps {
  profile: Profile;
  onSubmit: (name: string, form?: FormInstance) => void;
  loading?: boolean;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onSubmit, loading = false }) => {
  const [form] = Form.useForm<{ name: string }>();
  const { t } = useTranslation();

  const handleFinish = (values: { name: string }) => {
    onSubmit(values.name, form);
  };

  return (
    <Form form={form} layout="vertical" initialValues={{ name: profile.name }} onFinish={handleFinish}>
      <Form.Item
        label={t(`forms.ProfileForm.name.title`)}
        name="name"
        rules={[
          { required: true, message: t(`forms.ProfileForm.name.errors.required`) },
          { max: 50, message: t(`forms.ProfileForm.name.errors.tooLong`) },
        ]}
      >
        <Input placeholder={t(`forms.ProfileForm.name.placeholder`)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          {t(`forms.ProfileForm.submit.title`)}
        </Button>
      </Form.Item>
    </Form>
  );
};
