import React, { useState } from "react";
import SearchVenue from "./components/SearchVenue";
import axios from "axios";

function App() {
  const addSearch = (text) => {
    fetchVenue(text);
  };

  const fetchVenue = async (query) => {
    try {
      const config = {
        headers: {
          Authorization: 'fsq3CmKuWyyMDP7TPdcMH8c04FIei8nghOC/it/8r7RSAZ4=',
        }
      }
      const response = await axios.get(`https://api.foursquare.com/v3/places/search?query=${query}`, config);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  };

  return (
    <div className="container">
      <h1>Foursquare API</h1>
      <SearchVenue onAddSearch={addSearch} />
    </div>
  );
}

export default App;