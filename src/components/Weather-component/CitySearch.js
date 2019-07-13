import React, { Component } from "react";

/*class CitySearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather} className="search-panel mt-3 p-4">
        <input type="text" name="city" placeholder="City..." />
         <input type="text" name="country" placeholder="Country..." />
         
        <button className="btn btn-primary">Get Weather</button>
      </form>
    );
  }
}*/

const CitySearch = props => {

  if(!props.loading){
  return (
    <form onSubmit={props.getWeather} className="search-panel mt-3 p-4">
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button className="btn btn-primary">Get Weather</button>
    </form>
  );
  }
  else{
    return (
      <form onSubmit={props.getWeather} className="search-panel mt-3 p-4">
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <img style={{margin:'auto'}} src='https://camo.githubusercontent.com/9be29021cfdb21b2cc257a3efcb269f64d42f5b6/687474703a2f2f32352e6d656469612e74756d626c722e636f6d2f63393961353739646233616530666331363462663463636131343838383564332f74756d626c725f6d6a6776386b45754d67317338376e37396f315f3430302e676966'
        width='50' height='40'/>
      </form>
    );
  }

  
};

export default CitySearch;
