import React from "react";

const CurrentWeather = props => {
  return (
    <section id="main-weather">
      <img src={props.src(props.id)} alt="clear icon" />
      <p id="hero">{props.name}</p>
      <p>
        <strong>Temperature</strong> {props.min} to {props.max}&#8451;
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
