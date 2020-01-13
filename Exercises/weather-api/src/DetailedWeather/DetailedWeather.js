import React from "react";

const DetailedWeather = props => {
  return (
    <div>
      <ul>
        <li>{props.time}</li>
        <li>
          <img src={props.src} />
        </li>
        <li>{props.temp}</li>
      </ul>
    </div>
  );
};

export default DetailedWeather;
