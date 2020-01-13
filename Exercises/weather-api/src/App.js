import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <input
            type="text"
            id="input-country"
            placeholder="Input country name..."
          />
          <button>FIND WEATHER</button>
        </header>
        <main className="app__main">
          <section id="main-weather">
            <img src={partlyCloudy} alt="clear icon" />
            <p id="hero">overcast clouds</p>
            <p>
              <strong>Temperature</strong> 10 to 11&#8451;
            </p>
            <div className="info">
              <p>
                <strong>Humidity</strong>
                <span> 78%</span>
              </p>
              <p>
                <strong>Pressure</strong>
                <span> 1008.48</span>
              </p>
            </div>
          </section>
          <section className="details">
            <div>
              <ul>
                <li>03:00</li>
                <li>
                  <img src={partlyCloudy} />
                </li>
                <li>8&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>06:00</li>
                <li>
                  <img src={partlyCloudy} />
                </li>
                <li>9&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>09:00</li>
                <li>
                  <img src={clear} />
                </li>
                <li>14&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>12:00</li>
                <li>
                  <img src={clear} />
                </li>
                <li>17&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>15:00</li>
                <li>
                  <img src={clear} />
                </li>
                <li>18&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>18:00</li>
                <li>
                  <img src={clear} />
                </li>
                <li>16&#8451;</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>21:00</li>
                <li>
                  <img src={partlyCloudy} />
                </li>
                <li>13&#8451;</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
