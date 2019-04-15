import React from "react";

const CityShow = props => {
  const chosenCity = props.cities.find(
    city => city.city === props.match.params.city
  );
  return (
    <div>
      <h1>{props.match.params.city},</h1>
      <h2>{chosenCity && chosenCity.country}</h2>
      <table border="1" className="table">
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
          <tr>
            <td>{chosenCity && chosenCity.all_buildings}</td>
            <td>{chosenCity && chosenCity.one_hundred}</td>
            <td>{chosenCity && chosenCity.one_hundred_fifty}</td>
            <td>{chosenCity && chosenCity.two_hundred}</td>
            <td>{chosenCity && chosenCity.three_hundred}</td>
            <td>{chosenCity && chosenCity.telecom_towers}</td>
            <td>{chosenCity && chosenCity.all_structures}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CityShow;
