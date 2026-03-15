import { ServerErrors, ErrorCode, ServerErrorItem, HttpError } from 'src/shared/types/server';
import type { MessageInstance } from 'antd/es/message/interface';
import type { FormInstance } from 'antd';

export const handleServerErrors = (
  err: HttpError | void,
  t: (input: string) => string,
  message: MessageInstance,
  form?: FormInstance
) => {
  console.log(err);
  if (!err || !err.data?.errors) {
    message.error('Unknown error');
    return;
  }

  const serverErrors: ServerErrors = err.data;

  serverErrors.errors.forEach((e: ServerErrorItem) => {
    if (e.fieldName && form) {
      // если ошибка привязана к полю — показываем под полем
      form.setFields([
        {
          name: e.fieldName,
          errors: [e.message],
        },
      ]);
    } else {
      // глобальная ошибка
      if (e.extensions.code in ErrorCode) {
        message.error(t(`message.errors.${e.extensions.code}`));
      } else {
        message.error(e.message);
      }
    }
  });
};
