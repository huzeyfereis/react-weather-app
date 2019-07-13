import React, { Component } from "react";

const CityInfo = props => {
  const isFavorite = props.bookmarks.some(bookmark => bookmark.id === props.id);


  
return (
    <div className="city-info-panel">
      <div className="city_weather_info p-4">
        {props.country && props.city && (
          <p>
            <span className="city_weather_key">Location:</span> {props.city},{" "}
            {props.country}{" "}
            <a onClick={props.addFav}>
              <span>
                {"   "}
                <img
                  src={
                    isFavorite
                      ? "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/heart-128.png"
                      : "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/heart-o-128.png"
                  }
                  width="25"
                  height="25"
                />
              </span>
            </a>
          </p>
        )}
        {props.temprature && (
          <p>
            <span className="city_weather_key">Tepmprature:</span>{" "}
            {props.temprature}{" "}
          </p>
        )}
        {props.humidity && (
          <p>
            <span className="city_weather_key">Humidity:</span> {props.humidity}
          </p>
        )}
        {props.description && (
          <p>
            <span className="city_weather_key">Conditions:</span>{" "}
            {props.description}
          </p>
        )}
        {props.error && <p>{props.error}</p>}
      </div>
    </div>
  );
  };

export default CityInfo;
