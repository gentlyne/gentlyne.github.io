import React, { createContext, useContext, useMemo } from 'react';
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';

interface MessageContextProps {
  message: MessageInstance;
}

const MessageContext = createContext<MessageContextProps | null>(null);

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage должен быть использован внутри MessageProvider');
  }
  return context.message;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { message } = App.useApp();

  const value = useMemo(() => ({ message }), [message]);

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};
