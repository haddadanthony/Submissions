import React from "react";

const DetailedWeather = props => {
  return (
    <div>
      <ul>
        <li>{props.time}</li>
        <li>
          <img src={props.src(props.id)} />
        </li>
        <li>{props.temp}&#8451;</li>
      </ul>
    </div>
  );
};

export default DetailedWeather;
