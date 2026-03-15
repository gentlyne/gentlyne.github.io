import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App as AntdApp } from 'antd';
import { MessageProvider } from './contexts/MessageContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AntdApp>
      <MessageProvider>
        <LanguageProvider>
          <ThemeProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ThemeProvider>
        </LanguageProvider>
      </MessageProvider>
    </AntdApp>
  </React.StrictMode>
);
