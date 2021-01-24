import React from 'react';
import './app.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default React.memo(App);
