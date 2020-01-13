import React from "react";

const CurrentWeather = props => {
  return (
    <section id="main-weather">
      <img src={props.src} alt="clear icon" />
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
  );
};

export default CurrentWeather;
