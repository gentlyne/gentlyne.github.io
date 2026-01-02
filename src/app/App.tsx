import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { ThemeToggle } from 'src/shared/ui-kit/ThemeToggle/ThemeToggle';

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333333',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
  };

  return (
    <ThemeProvider>
      <div style={themeStyle} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <p>Раиль</p>
          <p>
            36 лет, рост 176 см. Работаю удалённо (обычный график 11:00—20:00). Сейчас изучаю фронтенд с нуля — фокус на
            React
          </p>
          <p>Telegram: </p>
          <a href="tg://resolve?domain=gentlyne">@gentlyne</a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
