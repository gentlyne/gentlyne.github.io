export const fakeLogin = async (role: 'admin' | 'user') => {
  return new Promise<{ token: string; role: 'admin' | 'user' }>((resolve) => {
    setTimeout(() => {
      resolve({
        token: Math.random().toString(36).slice(2),
        role,
      });
    }, 500);
  });
};
