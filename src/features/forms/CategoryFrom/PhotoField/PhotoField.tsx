import React, { memo } from 'react';
import cn from 'clsx';
import { type GetProp, message, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'src/shared/ui-kit/FormItem';
import { getValidates } from 'src/utils/validation';
import { CategoryFormProps } from '../types';
import s from './PhotoField.module.sass';
import { useFormikField } from 'src/shared/lib/forms/useFormikField';
import type { UploadProps } from 'antd/es/upload';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useUploadFileMutation } from 'src/entities/category/api/uploadApi';
import { UploadRequestOption } from 'rc-upload/lib/interface';
import type { FormikHandlers } from 'formik';

export type PhotoFieldProps = Pick<CategoryFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  name: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const PhotoField = memo(({ className, name, disabled }: PhotoFieldProps) => {
  const { t } = useTranslation();
  const field = useFormikField<string>(name);
  const [uploadFile, { isLoading }] = useUploadFileMutation();

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

  type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const { validateStatus, help } = getValidates(field.error, field.touched, field.submitCount);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{t(`category.form.label.upload`)}</div>
    </button>
  );

  return (
    <FormItem
      className={cn(s.root, className)}
      title={t(`category.form.label.photo`)}
      required
      validateStatus={validateStatus}
      help={help}
    >
      <Upload
        disabled={disabled}
        listType="picture-card"
        className="avatar-uploader"
        name={name}
        showUploadList={false}
        customRequest={customRequest}
        onChange={(info) => {
          if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as FileType, (url) => {
              field.antd.onChange(url);
            });
          }
        }}
      >
        {field.antd.value ? (
          <img draggable={false} src={field.antd.value} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </FormItem>
  );
});

PhotoField.displayName = 'PhotoField';
