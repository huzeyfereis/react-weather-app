import React, { Component } from "react";

const FavoriteCities = props => {
  return (
   
    <div className="favorite-cities p-4">
      <span className="city_weather_key">{props.cities.length>0 ? 'Favorite Cities' : 'No Favorite City'} </span>
      <ul>
        {props.cities.map((city, index) => {
          return (
            <li key={city.id}>
              {city.city}
              {"  "}&nbsp;
              <img
                name={city.id}
                onClick={props.unmark}
                src="https://cdn0.iconfinder.com/data/icons/basic-ui-1-line/64/Artboard_16-24.png"
                width="20"
                height="20"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// class FavoriteCities extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favorites: this.props.bookmark
//     };
//   }
//   render() {
//     return (
//       <div className="favorite-cities p-4">
//         <p>Favorite Cities</p>
//         <ul>
//           {this.state.addFav.map((name, index) => {
//             return <li key={index}>{name}sdfsd</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export default FavoriteCities;
