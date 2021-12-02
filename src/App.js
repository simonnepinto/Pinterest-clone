import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
