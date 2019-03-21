import React from "react";
import CitySorts from "./CitySorts";

const sortFactors = [
  {
    text: "City",
    value: "city"
  },
  {
    text: "Country",
    value: "country"
  },
  {
    text: "All Buildings",
    value: "all_buildings"
  }
];

class CityIndex extends React.Component {
  state = {
    cities: [],
    sortFactor: null
  };

  changeSortFactor = (event, { value }) => {
    this.setState({
      sortFactor: value
    });
  };

  sortCities = cities => {
    if (this.state.sortFactor === "city") {
      return cities.sort((a, b) => {
        return a.city.localeCompare(b.city);
      });
    } else if (this.state.sortType === "country") {
      return cities.sort((a, b) => {
        return a.country.localeCompare(b.country);
      });
    } else {
      return cities;
    }
  };

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>
                <a href="https://localhost:3000/cities/id">ID</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/city">City</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/country">Country</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/allbuildings">
                  All Buildings
                </a>
              </th>
              <th>100m+</th>
              <th>150m+</th>
              <th>200m+</th>
              <th>300m+</th>
              <th>Telecom Towers</th>
              <th>All Structures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.props.cities.map(city => {
                return (
                  <tr>
                    <td>{city.client_city_id} </td>
                    <td> {city.city} </td>
                    <td>{city.country}</td>
                    <td>{city.all_buildings}</td>
                    <td>{city.one_hundred}</td>
                    <td>{city.one_hundred_fifty}</td>
                    <td>{city.two_hundred}</td>
                    <td>{city.three_hundred}</td>
                    <td>{city.telecom_towers}</td>
                    <td>{city.all_structures}</td>
                  </tr>
                );
              })}
            </tr>
          </tbody>
        </table>
        <CitySorts cities={this.props.cities} />
      </div>
    );
  }
}

export default CityIndex;
