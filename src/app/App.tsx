import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'src/shared/ui-kit/header/header';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
