import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

import Search from "./Search/Search";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DetailedWeather from "./DetailedWeather/DetailedWeather";

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
        <Search />
        <main className="app__main">
          <CurrentWeather src={partlyCloudy} />
          <section className="details">
            <DetailedWeather src={partlyCloudy} time="03:00" temp="8&#8451;" />

            <DetailedWeather src={partlyCloudy} time="06:00" temp="9&#8451;" />

            <DetailedWeather src={clear} time="09:00" temp="14&#8451;" />

            <DetailedWeather src={clear} time="12:00" temp="17&#8451;" />

            <DetailedWeather src={clear} time="15:00" temp="18&#8451;" />

            <DetailedWeather src={clear} time="18:00" temp="16&#8451;" />

            <DetailedWeather src={partlyCloudy} time="21:00" temp="13&#8451;" />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
