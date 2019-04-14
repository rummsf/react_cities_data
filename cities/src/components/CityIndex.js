import React from "react";
import { Link } from "react-router-dom";
import "./Styling.css";

class CityIndex extends React.Component {
  sortCities = () => {
    let sortedCities = [
      ...this.props.cities.filter(
        city =>
          city.city.toLowerCase().includes(this.props.searchQuery) ||
          city.country.toLowerCase().includes(this.props.searchQuery)
      )
    ];
    switch (this.props.match.params.sort) {
      case "cities":
        return sortedCities;
      case "city":
        sortedCities = sortedCities.sort((a, b) => {
          return a.city.localeCompare(b.city);
        });
        break;
      case "country":
        sortedCities = sortedCities.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
        break;
      case "id":
        sortedCities = sortedCities.sort((a, b) => {
          return a.client_city_id - b.client_city_id;
        });
        break;
      case "allbuildings":
        sortedCities = sortedCities.sort((a, b) => {
          return a.all_buildings - b.all_buildings;
        });
        break;

      default:
        return sortedCities;
    }
    return sortedCities;
  };

  render() {
    const sortedCities = this.sortCities();
    return (
      <div>
        <table border="1" className="table">
          <thead>
            <tr>
              <th>
                <Link to={`/cities/id`}>ID </Link>
              </th>
              <th>
                <Link to={`/cities/city`}>City </Link>
              </th>
              <th>
                <Link to={`/cities/country`}>Country </Link>
              </th>
              <th>
                <Link to={`/cities/allbuildings`}>All Buildings </Link>
              </th>
              <th>
                <Link to={`/cities/100m+`}> 100m+ </Link>
              </th>
              <th>
                <Link to={`/cities/150m+`}> 150m+ </Link>
              </th>
              <th>
                <Link to={`/cities/200m+`}> 200m+ </Link>
              </th>
              <th>
                <Link to={`/cities/300m+`}> 300m+ </Link>
              </th>
              <th>
                <Link to={`/cities/telecomtowers`}> Telecom Towers </Link>
              </th>
              <th>
                <Link to={`/cities/allstructures`}> All Structures </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCities.map(city => {
              return (
                <tr key={city.city}>
                  <td>{city.client_city_id} </td>
                  <td>
                    <Link to={`/cities/show/${city.city}`}>
                      <h5>{city.city}</h5>
                    </Link>
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
      </div>
    );
  }
}

export default CityIndex;
