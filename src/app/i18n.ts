import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: 'Income/Expense Accounting Application',
      },
      theme: {
        light: 'Light',
        dark: 'Dark',
      },
      category: {
        name: 'Categories',
        create: 'Create',
        filter: {
          name: 'Search by name',
          type: 'Type',
          created: {
            start: 'Created from',
            end: 'Created to',
          },
          updated: {
            start: 'Updated from',
            end: 'Updated to',
          },
          apply: 'Apply',
        },
        table: {
          photo: 'Photo',
          name: 'Name',
          modified: 'Modified',
          created: 'Created',
          actions: 'Actions',
          edit: 'Edit',
          delete: 'Delete',
          confimDelete: 'Delete operation?',
        },
        form: {
          title: {
            edit: 'Edit Category',
            create: 'Create Category',
          },
          label: {
            name: 'Name',
            photo: 'Photo',
            upload: 'Upload',
          },
          placeholder: {
            name: 'Enter category name',
          },
          required: {
            name: 'Name is required',
          },
          error: {
            upload: 'Upload failed',
            submit: 'Operation failed',
          },
        },
        message: {
          deleted: {
            success: 'Category deleted',
            error: 'Failed to delete category',
          },
          updated: 'Category updated',
          created: 'Category created',
          failed: 'Operation failed',
        },
      },
      operation: {
        name: 'Operations',
        create: 'Create',
        type: {
          Profit: 'Profit',
          Cost: 'Cost',
        },
        filter: {
          name: 'Search by name',
          type: 'Type',
          date: {
            start: 'Start date',
            end: 'End date',
          },
        },
        table: {
          name: 'Name',
          amount: 'Amount',
          type: 'Type',
          category: 'Category',
          date: 'Date',
          modified: 'Modified',
          created: 'Created',
          actions: 'Actions',
          edit: 'Edit',
          delete: 'Delete',
          confimDelete: 'Delete operation?',
        },
        message: {
          deleted: {
            success: 'Operation deleted',
            error: 'Failed to delete',
          },
          updated: 'Operation updated',
          created: 'Operation created',
          failed: 'Operation failed',
        },
      },
      profile: {
        title: 'Profile',
      },
      auth: {
        signin: {
          title: 'Sign In',
          form: {
            email: {
              title: 'Email',
              placeholder: 'Enter your email',
              errors: {
                required: 'Email required',
                tooLong: 'Max length is 255',
                invalid: 'Not valid format email',
              },
            },
            password: {
              title: 'Password',
              placeholder: 'Enter your password',
              errors: {
                required: 'Password required',
                tooShort: 'Min length is 6',
              },
            },
            submit: 'Sign In',
            success: 'Successfully signed in',
          },
        },
        signup: {
          title: 'Sign Up',
          submit: 'Sign Up',
          success: 'Successfully signed up',
          form: {
            confirmPassword: {
              title: 'Confirm Password',
              placeholder: 'Enter your password again',
              errors: {
                required: 'Confirm Password required',
                notConfirm: 'Passwords are not equals',
              },
            },
          },
        },
        reset: {
          title: 'Change Password',
          form: {
            title: {
              oldPassword: 'Current password',
              newPassword: 'New password',
              confirmPassword: 'Confirm Password',
            },
            placeholder: {
              oldPassword: 'Enter your current password',
              newPassword: 'Enter new password',
              confirmPassword: 'Enter your new password again',
            },
            required: {
              oldPassword: 'Current password required',
              newPassword: 'New password required',
              confirmPassword: 'Confirm password required',
            },
            tooShort: 'Min length is 6',
            notConfirm: 'New password is not equal with confirm',
            submit: 'Save new password',
            success: 'Password change success',
          },
        },
        logout: 'Logout',
      },
      message: {
        errors: {
          UNKNOWN_ERROR: 'Unknown error',
          ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect email or password',
          ERR_ACCOUNT_ALREADY_EXIST: 'Account already exists',
          ERR_INTERNAL_SERVER: 'Internal server error',
          ERR_FIELD_REQUIRED: 'Field required',
          ERR_INCORRECT_PASSWORD: 'Incorrect password',
          ERR_INVALID_PASSWORD: 'Invalid password',
          ERR_NOT_VALID: 'Not valid id of entity',
          ERR_AUTH: 'Not authenticated',
          ERR_NO_FILES: 'Error upload files',
          ERR_NOT_ALLOWED: 'Not allow',
          ERR_NOT_FOUND: 'Not found',
          ERR_VALIDATION_ERROR: 'Error validation fields',
          ERR_INVALID_QUERY_PARAMS: 'Invalid query request',
        },
      },
      forms: {
        ProfileForm: {
          loading: 'Loading profile...',
          updated: 'Profile updated successfully',
          email: 'Email',
          signup: {
            date: 'Sign Up Date',
          },
          name: {
            title: 'Name',
            placeholder: 'Enter your name',
            errors: {
              required: 'Name is required',
              tooLong: 'Max length is 50',
            },
          },
          about: {
            title: 'About',
            placeholder: 'Tell about yourself',
            errors: {
              tooLong: 'Max length is 200',
            },
          },
          submit: {
            title: 'Save',
          },
        },
        OperationForm: {
          typeForm: {
            edit: 'Edit Operation',
            create: 'Create Operation',
          },
          title: {
            title: 'Title',
            placeholder: 'Enter title operation',
            errors: {
              required: 'Title required',
              tooLong: 'Max length is 50',
            },
          },
          category: {
            title: 'Сategory',
            placeholder: 'Enter сategory operation',
            errors: {
              required: 'Сategory required',
            },
          },
          amount: {
            title: 'Amount',
            placeholder: 'Enter amount of operation',
            errors: {
              required: 'Amount required',
            },
          },
          date: {
            title: 'Date',
            placeholder: 'Enter date operation',
            errors: {
              required: 'Date required',
              valid: 'Date is not valid',
            },
          },
          description: {
            title: 'Description',
            placeholder: 'Enter additional information about the operation',
            errors: {
              tooLong: 'Max length is 200',
            },
          },
          save: {
            title: 'Save',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      header: {
        title: 'Приложение учета доходов/расходов',
      },
      theme: {
        light: 'Светлая',
        dark: 'Темная',
      },
      category: {
        name: 'Категории',
        create: 'Создать',
        filter: {
          name: 'Поиск по названию',
          type: 'Тип',
          created: {
            start: 'Создан с',
            end: 'Создан до',
          },
          updated: {
            start: 'Изменен с',
            end: 'Изменен до',
          },
          apply: 'Выполнить',
        },
        table: {
          photo: 'Изображение',
          name: 'Название',
          modified: 'Изменена',
          created: 'Создана',
          actions: 'Действия',
          edit: 'Редактировать',
          delete: 'Удалить',
          confimDelete: 'Удалить категорию?',
        },
        form: {
          title: {
            edit: 'Редактирование категорию',
            create: 'Создание категорию',
          },
          label: {
            name: 'Название',
            photo: 'Изображение',
            upload: 'Загрузить',
          },
          placeholder: {
            name: 'Введите название категории',
          },
          required: {
            name: 'Название должно быть заполнено',
          },
          error: {
            upload: 'Ошибка загрузки изображения',
            submit: 'Операция была не выполнена',
          },
        },
        message: {
          deleted: {
            success: 'Категория удалена',
            error: 'Ошибка при удалении категории',
          },
          updated: 'Категория обновлена',
          created: 'Категория создана',
          failed: 'Ошибка редактирования',
        },
      },
      operation: {
        name: 'Операции',
        create: 'Создать',
        type: {
          Profit: 'Прибыль',
          Cost: 'Расходы',
        },
        filter: {
          name: 'Поиск по названию',
          type: 'Тип',
          date: {
            start: 'Начало периода',
            end: 'Конец периода',
          },
        },
        table: {
          name: 'Название',
          amount: 'Сумма',
          type: 'Тип',
          category: 'Категория',
          date: 'Дата операции',
          modified: 'Изменена',
          created: 'Создана',
          actions: 'Действия',
          edit: 'Редактировать',
          delete: 'Удалить',
          confimDelete: 'Удалить операцию?',
        },
        message: {
          deleted: {
            success: 'Операция удалена',
            error: 'Ошибка удаления',
          },
          updated: 'Операция обновлена',
          created: 'Операция создана',
          failed: 'Ошибка редактирования',
        },
      },
      profile: {
        title: 'Профиль',
      },
      auth: {
        signin: {
          title: 'Вход',
          form: {
            email: {
              title: 'Email',
              placeholder: 'Введите ваш email',
              errors: {
                required: 'Email обязательна для указания',
                tooLong: 'Максимальная длина — 255',
                invalid: 'Неверный формат email',
              },
            },
            password: {
              title: 'Пароль',
              placeholder: 'Введите ваш пароль',
              errors: {
                required: 'Пароль обязателен для указания',
                tooShort: 'Минимальная длина пароля — 6',
              },
            },
            submit: 'Вход',
            success: 'Вход выполнен успешно',
          },
        },
        signup: {
          title: 'Регистрация',
          submit: 'Регистрация',
          success: 'Регистрация выполнена успешно',
          form: {
            confirmPassword: {
              title: 'Подверждение пароля',
              placeholder: 'Введите еще раз ваш пароль',
              errors: {
                required: 'Подверждение пароля обязателен для указания',
                notConfirm: 'Пароли не совпадают',
              },
            },
          },
        },
        reset: {
          title: 'Смена пароля',
          form: {
            title: {
              oldPassword: 'Текущий пароль',
              newPassword: 'Новый пароль',
              confirmPassword: 'Подверждение нового пароля',
            },
            placeholder: {
              oldPassword: 'Введите ваш текущий пароль',
              newPassword: 'Введите новый пароль',
              confirmPassword: 'Введите заново новый пароль',
            },
            required: {
              oldPassword: 'Текущий пароль обязателен для заполнения',
              newPassword: 'Новый пароль обязателен для заполнения',
              confirmPassword: 'Подвержение пароля обязателен',
            },
            tooShort: 'Минимальная длина - 6',
            notConfirm: 'Новый пароль не совпадает с подвержением',
            submit: 'Сохранить новый пароль',
            success: 'Пароль успешно изменен',
          },
        },
        logout: 'Выход',
      },
      message: {
        errors: {
          UNKNOWN_ERROR: 'Неизвестная ошибка',
          ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Неверное имя или пароль',
          ERR_ACCOUNT_ALREADY_EXIST: 'Такой пользователь уже существует',
          ERR_INTERNAL_SERVER: 'Внутренняя ошибка сервера',
          ERR_FIELD_REQUIRED: 'ребуется заполнения поля',
          ERR_INCORRECT_PASSWORD: 'Неверный пароль',
          ERR_INVALID_PASSWORD: 'Пароль не соотвествует требованию',
          ERR_NOT_VALID: 'Не валидный id сущности',
          ERR_AUTH: 'Токен не передан, либо не прошел авторизацию',
          ERR_NO_FILES: 'Ошибка при загрузке файлов',
          ERR_NOT_ALLOWED: 'Нет доступа к данной операции',
          ERR_NOT_FOUND: 'Сущность не найдена',
          ERR_VALIDATION_ERROR: 'Не валидные данные',
          ERR_INVALID_QUERY_PARAMS: 'Неверный серверный запрос',
        },
      },
      forms: {
        ProfileForm: {
          loading: 'Загрузка профиля...',
          updated: 'Профиль обновлен успешно',
          email: 'Электронная почта',
          signup: {
            date: 'Дата регистрации',
          },
          name: {
            title: 'Имя',
            placeholder: 'Введите ваше имя',
            errors: {
              required: 'Имя обязательно для указания',
              tooLong: 'Максимальная длина — 50',
            },
          },
          about: {
            title: 'О себе',
            placeholder: 'Расскажи о себе',
            errors: {
              tooLong: 'Максимальная длина — 200',
            },
          },
          submit: {
            title: 'Сохранить',
          },
        },
        OperationForm: {
          typeForm: {
            edit: 'Редактирование операции',
            create: 'Создание операции',
          },
          title: {
            title: 'Название',
            placeholder: 'Введите название операции',
            errors: {
              required: 'Название обязательно для указания',
              tooLong: 'Максимальная длина — 50',
            },
          },
          category: {
            title: 'Категория',
            placeholder: 'Введите категорию операции',
            errors: {
              required: 'Категория обязательна для указания',
            },
          },
          amount: {
            title: 'Сумма',
            placeholder: 'Введите сумму операции',
            errors: {
              required: 'Сумма обязательна для указания',
            },
          },
          date: {
            title: 'Дата операции',
            placeholder: 'Введите дату операции',
            errors: {
              required: 'Дата операции обязательна для указания',
              valid: 'Дата операции неверного формата',
            },
          },
          description: {
            title: 'Описание',
            placeholder: 'Введите дополнительную информацию об операции',
            errors: {
              tooLong: 'Максимальная длина — 200',
            },
          },
          save: {
            title: 'Сохранить',
          },
        },
      },
    },
  },
};

use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
