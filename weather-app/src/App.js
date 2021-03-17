import './App.css';
import React from 'react';
import background from "./home-background.png"
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import icons from 'App.html';
import { Button, Card, Row, Col } from 'react-materialize';
// import render from 'react-dom';

//shows daily weather
function App() {
  // source: https://reactgo.com/react-get-current-date/
  const today = new Date()
  const currDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  //source for image: https://reactgo.com/react-background-image/
  return (
    <div className="App">
      <header className="App-header">
        <h4> The Weather App!</h4>
      </header>

      <body class= "App-body">
        <div styles = {{ backgroundImage : `url(${background})` }}>
        <div class = "row">
          <div class="col s4">
              <h3> Pittsburgh, PA </h3>
              <h3> Date: { currDate } </h3>
          </div>

          <div class="col s4">
            <i class="material-icons"> wb_sunny </i>
          </div>

          <div class = "col s4">
            <h3> Today is Sunny </h3>
            <h3> Temperature: 56F </h3>
          </div>
        </div>

        <h3> Weekly Weather Forecast </h3>
        <table class = "App-table">
          <tr>
            <th> Monday </th>
            <th> Tuesday </th>
            <th> Wednesday </th>
            <th> Thursday </th>
            <th> Friday </th>
            <th> Saturday </th>
            <th> Sunday </th>
          </tr>
          <tr>
            <td> 52F </td>
            <td> 48F </td>
            <td> 50F </td>
            <td> 58F </td>
            <td> 52F </td>
            <td> 53F </td>
            <td> 45F </td>
          </tr>
          <tr>
            <td> 30F </td>
            <td> 37F </td>
            <td> 32F </td>
            <td> 40F </td>
            <td> 45F </td>
            <td> 38F </td>
            <td> 37F </td>
          </tr>
        </table>
        </div>
      </body>
    </div>
  );
}

export default App;
