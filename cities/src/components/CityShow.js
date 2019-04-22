import React from "react";
import "./Styling.css";

const CityShow = props => {
  const chosenCity = props.cities.find(
    city => city.city === props.match.params.city
  );
  return (
    <div>
      <h2>
        {props.match.params.city}, <br />
        {chosenCity && chosenCity.country}
      </h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th> Total Buildings </th>
            <th> 100m+</th>
            <th> 150m+</th>
            <th> 200m+</th>
            <th> 300m+</th>
            <th> Telecom Towers </th>
            <th> Total Structures</th>
          </tr>
        </thead>
        <tr>
          <td>{chosenCity && chosenCity.all_buildings}</td>
          <td>{chosenCity && chosenCity.one_hundred}</td>
          <td>{chosenCity && chosenCity.one_hundred_fifty}</td>
          <td>{chosenCity && chosenCity.two_hundred}</td>
          <td>{chosenCity && chosenCity.three_hundred}</td>
          <td>{chosenCity && chosenCity.telecom_towers}</td>
          <td>{chosenCity && chosenCity.all_structures}</td>
        </tr>
      </table>
    </div>
  );
};

export default CityShow;
