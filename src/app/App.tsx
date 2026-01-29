import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Header } from 'src/shared/ui-kit/header/header';
import { LanguageProvider } from 'src/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Header />
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
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
