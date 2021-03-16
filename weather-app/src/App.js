// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import render from 'react-dom';

//shows daily weather
function App() {
  // source: https://reactgo.com/react-get-current-date/
  const today = new Date()
  const currDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the Weather App!</h1>
      </header>

      <div class="left-side">
          <h3> Pittsburgh, PA </h3>
          <h3> Date: { currDate } </h3>
      </div>

      <div class = "right-side">
        <h3> Today is Sunny </h3>
        <h3> Temperture: 82F </h3>
      </div>

      <footer>
        <a href = "index.js"> Click here to view weekly weather data </a>
      </footer>
    </div>
  );
}

export default App;
