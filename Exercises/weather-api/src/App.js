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

    this.state = {
      loading: true,
      weather: null,
      searchInput: null,
      minTemp: null
    };
  }

  handleClick = async () => {
    console.log(this.state.searchInput);
    this.setState({ searchInput: "" });
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchInput}&cnt=8&units=metric&appid=d336c6f46ac8e4ecf0c7d840d5fa9f5f`
    );
    const result = await response.json();
    this.setState({ weather: result });
    console.log(this.state.weather);
  };

  changeHandler = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const loading = (
      <div className="loading">
        Loading...<span> Input country name</span>
      </div>
    );

    if (this.state.weather) {
      var main = this.state.weather.list[0].main;
    }

    return (
      <div className="app">
        <Search
          click={this.handleClick}
          change={this.changeHandler}
          value={this.state.searchInput}
        />

        {!this.state.weather ? (
          loading
        ) : (
          <main className="app__main">
            <CurrentWeather
              name={this.state.weather.city.name}
              src={partlyCloudy}
              humidity={main.humidity}
              pressure={main.pressure}
              min={Math.floor(main.temp_min)}
              max={Math.floor(this.state.weather.list[4].main.temp)}
            />
            <section className="details">
              <DetailedWeather
                src={partlyCloudy}
                time="03:00"
                temp={Math.floor(this.state.weather.list[2].main.temp)}
              />

              <DetailedWeather
                src={partlyCloudy}
                time="06:00"
                temp={Math.floor(this.state.weather.list[3].main.temp)}
              />

              <DetailedWeather
                src={clear}
                time="09:00"
                temp={Math.floor(this.state.weather.list[4].main.temp)}
              />

              <DetailedWeather
                src={clear}
                time="12:00"
                temp={Math.floor(this.state.weather.list[5].main.temp)}
              />

              <DetailedWeather
                src={clear}
                time="15:00"
                temp={Math.floor(this.state.weather.list[6].main.temp)}
              />

              <DetailedWeather
                src={clear}
                time="18:00"
                temp={Math.floor(this.state.weather.list[7].main.temp)}
              />

              <DetailedWeather
                src={partlyCloudy}
                time="21:00"
                temp={Math.floor(this.state.weather.list[0].main.temp)}
              />
            </section>
          </main>
        )}
      </div>
    );
  }
}

export default App;
