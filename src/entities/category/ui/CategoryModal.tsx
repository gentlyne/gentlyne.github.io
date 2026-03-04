import React, { memo } from 'react';
import { Modal, Form, Input, Upload } from 'antd';
import type { GetProp } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import type { UploadProps } from 'antd/es/upload/interface';
import { Category } from '../types';
import { useUploadFileMutation } from '../api/uploadApi';
import type { UploadRequestOption } from 'rc-upload/lib/interface';
import { useTranslation } from 'react-i18next';
import { useMessage } from 'src/contexts/MessageContext';

interface CategoryModalProps {
  open: boolean;
  initial?: Category;
  onCancel: () => void;
  onSubmit: (values: { name: string; photo?: string }) => Promise<void>;
}

interface FormValues {
  name: string;
  photo: string;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const CategoryModal = memo(({ open, initial, onCancel, onSubmit }: CategoryModalProps) => {
  const { t } = useTranslation();
  const message = useMessage();

  const initialValues: FormValues = initial
    ? {
        name: initial.name,
        photo: initial.photo,
      }
    : {
        name: '',
        photo: null,
      };
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name.trim()) errors.name = t(`category.form.required.name`);
    return errors;
  };

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const [uploadFile, { isLoading }] = useUploadFileMutation();

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{t(`category.form.label.upload`)}</div>
    </button>
  );

  const customRequest = async (options: UploadRequestOption) => {
    const { file, onSuccess, onError } = options;
    if (!(file instanceof File)) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await uploadFile(formData).unwrap();
      onSuccess?.(res, new XMLHttpRequest());
    } catch (err) {
      console.error(err);
      onError?.(err as Error);
      message.error(t(`category.form.error.upload`));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validate={validate}
      onSubmit={async (values: FormValues, helpers: FormikHelpers<FormValues>) => {
        try {
          await onSubmit({ name: values.name, photo: values.photo });
          helpers.resetForm();
        } catch {
          message.error(t(`category.form.error.submit`));
        } finally {
          helpers.setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
        <Modal
          title={initial ? t(`category.form.title.edit`) : t(`category.form.title.create`)}
          open={open}
          onCancel={onCancel}
          onOk={() => handleSubmit()}
          okButtonProps={{ loading: isSubmitting }}
        >
          <Form layout="vertical">
            <Form.Item label={t(`category.form.label.name`)} required>
              <Input
                value={values.name}
                onChange={(e) => setFieldValue('name', e.target.value)}
                placeholder={t(`category.form.label.placeholder`)}
              />
            </Form.Item>

            <Form.Item label={t(`category.form.label.name`)}>
              <Upload
                key={initial?.id ?? 'create'}
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                customRequest={customRequest}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    getBase64(info.file.originFileObj as FileType, (url) => {
                      setFieldValue('photo', url);
                    });
                  }
                }}
              >
                {values.photo ? (
                  <img draggable={false} src={values.photo} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </Formik>
  );
});

CategoryModal.displayName = 'CategoryModal';
