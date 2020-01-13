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
import FakeWeather from "./data/FakeWeather.json";

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
          <CurrentWeather
            status={FakeWeather.list[6].weather[0].description}
            src={partlyCloudy}
            humidity={FakeWeather.list[0].main.humidity}
            pressure={FakeWeather.list[0].main.pressure}
          />
          <section className="details">
            <DetailedWeather
              src={partlyCloudy}
              time="03:00"
              temp={FakeWeather.list[6].main.temp}
            />

            <DetailedWeather
              src={partlyCloudy}
              time="06:00"
              temp={FakeWeather.list[0].main.temp}
            />

            <DetailedWeather
              src={clear}
              time="09:00"
              temp={FakeWeather.list[1].main.temp}
            />

            <DetailedWeather
              src={clear}
              time="12:00"
              temp={FakeWeather.list[2].main.temp}
            />

            <DetailedWeather
              src={clear}
              time="15:00"
              temp={FakeWeather.list[3].main.temp}
            />

            <DetailedWeather
              src={clear}
              time="18:00"
              temp={FakeWeather.list[4].main.temp}
            />

            <DetailedWeather
              src={partlyCloudy}
              time="21:00"
              temp={FakeWeather.list[5].main.temp}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
