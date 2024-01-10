import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, geoApi } from "../../api";

function Search({onSearch}) {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${url}?minPopulation=100000&namePrefix=${inputValue}`,
        geoApi
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearch(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search cities"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
