import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term);
  };

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard />
    </div>
  );
}

export default App;
