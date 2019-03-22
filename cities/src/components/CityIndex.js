import React from "react";
import CitySorts from "./CitySorts";
import "./Styling.css";

class CityIndex extends React.Component {
  state = {
    cities: this.props.cities
  };

  sortCities = props => {
    switch (this.props.location.pathname) {
      case "cities/city":
        return this.cities.sort((a, b) => {
          return a.city.localeCompare(b.city);
        });
      case "cities/country":
        return this.cities.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
      default:
        return this.state.cities;
    }
  };

  render() {
    const renderedCities = this.sortCities(this.props.location.pathname);
    return (
      <div>
        <table border="1" className="table">
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
              <th>
                <a href="https://localhost:3000/cities/100m">100m+</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/150m">150m+</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/200m">200m+</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/300m">300m+</a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/telecomtowers">
                  Telecom Towers
                </a>
              </th>
              <th>
                <a href="https://localhost:3000/cities/allstructures">
                  All Structures
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderedCities.map(city => {
              return (
                <tr>
                  <td>{city.client_city_id} </td>
                  <td>
                    <h5>{city.city}</h5>
                  </td>
                  <td>
                    <h5>{city.country}</h5>
                  </td>
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
          </tbody>
        </table>
        <CitySorts cities={this.props.cities} />
      </div>
    );
  }
}

export default CityIndex;
