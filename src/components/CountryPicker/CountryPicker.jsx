import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { FormControl, NativeSelect } from "@material-ui/core";

import { fetchCountries } from "../../api";

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchedAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchedAPI();
  },[setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => props.handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
