import React, { useState, useEffect } from "react";
import SearchVenue from "./components/SearchVenue";
import axios from "axios";

function App() {
  
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenue();
  }, []);


  const addSearch = (text) => {
    fetchVenue(text);
  };

  const fetchVenue = async (text) => {
    console.log(text)
    try {
      const config = {
        headers: {
          Authorization: 'fsq3CmKuWyyMDP7TPdcMH8c04FIei8nghOC/it/8r7RSAZ4=',
        }
      }
      const response = await axios.get(`https://api.foursquare.com/v3/places/search?query=${text}`, config);
      const data = response.data;
      console.log(data)
      setVenues(data.results);
      return data;
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  };

  return (
    <div className="container">
      <h1>Foursquare API</h1>
      <SearchVenue onAddSearch={addSearch} />
      <ul>
      {venues.map((venue) => (
         <li key={venue.fsq_id}>{venue.name}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;