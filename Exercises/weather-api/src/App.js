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
      errorMessage: ""
    };
  }

  iconHandler = id => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id == 800) {
      return clear;
    } else if (id == 801) {
      return partlyCloudy;
    } else if (id >= 801 && id <= 805) {
      return mostlyCloudy;
    }
  };

  handleClick = async () => {
    try {
      this.setState({ searchInput: "", errorMessage: "" });
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchInput}&cnt=8&units=metric&appid=d336c6f46ac8e4ecf0c7d840d5fa9f5f`
      );
      const result = await response.json();

      if (result.cod == 404 || result.cod == 400) {
        this.setState({
          weather: null,
          errorMessage: "Incorrect Input"
        });
      }
      this.setState({ weather: result });
    } catch (err) {
      console.log(err);
    }
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

    const ErrorMsg =
      this.state.errorMessage != "" ? (
        <p
          style={{
            padding: "5px",
            fontWeight: "bold",
            marginLeft: "10px",
            color: "red"
          }}
        >
          {this.state.errorMessage}
        </p>
      ) : (
        this.props.children
      );

    return (
      <div className="app">
        <Search
          click={this.handleClick}
          change={this.changeHandler}
          value={this.state.searchInput}
        />
        {ErrorMsg}
        {!this.state.weather || this.state.weather.cod == 404 ? (
          loading
        ) : (
          <main className="app__main">
            <CurrentWeather
              name={this.state.weather.city.name}
              id={this.state.weather.list[1].weather[0].id}
              src={this.iconHandler}
              humidity={this.state.weather.list[0].main.humidity}
              pressure={this.state.weather.list[0].main.pressure}
              min={Math.floor(this.state.weather.list[0].main.temp_min)}
              max={Math.floor(this.state.weather.list[4].main.temp)}
            />
            <section className="details">
              <DetailedWeather
                id={this.state.weather.list[2].weather[0].id}
                src={this.iconHandler}
                time="03:00"
                temp={Math.floor(this.state.weather.list[0].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[3].weather[0].id}
                src={this.iconHandler}
                time="06:00"
                temp={Math.floor(this.state.weather.list[3].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[4].weather[0].id}
                src={this.iconHandler}
                time="09:00"
                temp={Math.floor(this.state.weather.list[4].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[5].weather[0].id}
                src={this.iconHandler}
                time="12:00"
                temp={Math.floor(this.state.weather.list[5].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[6].weather[0].id}
                src={this.iconHandler}
                time="15:00"
                temp={Math.floor(this.state.weather.list[6].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[7].weather[0].id}
                src={this.iconHandler}
                time="18:00"
                temp={Math.floor(this.state.weather.list[7].main.temp)}
              />

              <DetailedWeather
                id={this.state.weather.list[0].weather[0].id}
                src={this.iconHandler}
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
