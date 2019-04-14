import React from "react";

const CityShow = props => {
  return (
    <div>
      <h1>{props.match.params.city}</h1>
    </div>
  );
};

export default CityShow;

// {/* <td>{props.city.one_hundred_fifty}</td>
//         <td>{props.two_hundred}</td>
//         <td>{props.city.three_hundred}</td>
//         <td>{props.city.telecom_towers}</td> */}

//   case "100m+":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.one_hundred - b.one_hundred;
// });
// break;
//       case "150m+":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.one_hundred_fifty - b.one_hundred_fifty;
// });
// break;
//       case "200m+":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.two_hundred - b.two_hundred;
// });
// break;
//       case "300m+":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.three_hundred - b.three_hundred;
// });
// break;
//       case "telecomtowers":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.telecom_towers - b.telecom_towers;
// });
// break;
//       case "allstructures":
// sortedCities = sortedCities.sort((a, b) => {
//   return a.all_structures - b.all_structures;
// });
// break;
