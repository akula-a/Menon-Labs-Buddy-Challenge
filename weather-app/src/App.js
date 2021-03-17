import './App.css';
import React from 'react';
import background from "./home-background.png"
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import icon from "./sun-icon.png";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
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
        <div class = "row">
          <div class = "col s4 offset-s4"> <h6> The Weather App</h6> </div>
        </div>
      </header>

      <body class= "App-body">
        <div styles = {{ backgroundImage : `url(${background})` }}>
        <div class = "App-daily-view"> 
          <div class = "row">
            <div class= "col s6">
                <h3> Welcome to the Weather App! </h3>
                <h5> Here, you can learn about the daily and weekly weather in Pittsburgh, PA. </h5>
                <br/>
                <h5> Today is Sunny, 56F </h5>
            </div>

            <div class = "col s6">
              <br/>
              <img src = {icon} alt = "sun icon"/>
            </div>
          </div>
        </div>

        <div class = "App-weekly-view">
          <table id = "App-table" class = "centered">
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
        </div>
      </body>
    </div>
  );
}

export default App;
