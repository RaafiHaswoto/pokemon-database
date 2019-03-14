// import React, { Component } from 'react';

import React from "react";

const SearchBar = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Search Pokemon..."
    className="form-control mx-auto"
    style={{
      height: "1.75em",
      width: "70%",
      borderRadius: "14px",
      opacity: "0.5",
      fontSize: "1.8em",
      backgroundColor: "white transparent"
    }}
  />
);

export default SearchBar;
