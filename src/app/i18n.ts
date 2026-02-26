import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: 'My App',
      },
      theme: {
        light: 'Light',
        dark: 'Dark',
      },
      forms: {
        ProfileForm: {
          title: 'Profile',
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
        },
        OperationForm: {
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
        AuthForm: {
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
              tooShort: 'Mix length is  6',
            },
          },
          confirmPassword: {
            title: 'Confirm Password',
            placeholder: 'Enter your password again',
            errors: {
              required: 'Confirm Password required',
              notConfirm: 'Passwords are not equals',
            },
          },
          signin: {
            title: 'Sign In',
          },
          signup: {
            title: 'Sign Up',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      header: {
        title: 'Моё приложение',
      },
      theme: {
        light: 'Светлая',
        dark: 'Темная',
      },
      forms: {
        ProfileForm: {
          title: 'Профиль',
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
        },
        OperationForm: {
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
        AuthForm: {
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
          confirmPassword: {
            title: 'Подверждение пароля',
            placeholder: 'Введите еще раз ваш пароль',
            errors: {
              required: 'Подверждение пароля обязателен для указания',
              notConfirm: 'Пароли не совпадают',
            },
          },
          signin: {
            title: 'Вход',
          },
          signup: {
            title: 'Регистрация',
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
