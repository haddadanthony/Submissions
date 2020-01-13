import React from "react";

const CurrentWeather = props => {
  return (
    <section id="main-weather">
      <img src={props.src} alt="clear icon" />
      <p id="hero">{props.status}</p>
      <p>
        <strong>Temperature</strong> 10 to 11&#8451;
      </p>
      <div className="info">
        <p>
          <strong>Humidity</strong>
          <span> {props.humidity}%</span>
        </p>
        <p>
          <strong>Pressure</strong>
          <span> {props.pressure}</span>
        </p>
      </div>
    </section>
  );
};

export default CurrentWeather;
