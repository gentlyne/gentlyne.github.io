import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'src/shared/ui-kit/Header/Header';
import { Logo } from 'src/shared/ui-kit/logo/logo';
import { LanguageToggle } from 'src/shared/ui-kit/LanguageToggle/LanguageToggle';
import { ThemeToggle } from 'src/shared/ui-kit/ThemeToggle/ThemeToggle';

function App() {
  return (
    <>
      <Header
        leftSlot={<Logo />}
        rightSlot={
          <>
            <LanguageToggle />
            <ThemeToggle />
          </>
        }
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Раиль</p>
          <p>
            36 лет, рост 176 см. Работаю удалённо (обычный график 11:00—20:00). Сейчас изучаю фронтенд с нуля — фокус
            React
          </p>
          <p>Telegram: </p>
          <a href="tg://resolve?domain=gentlyne">@gentlyne</a>
        </header>
      </div>
    </>
  );
}

export default App;
