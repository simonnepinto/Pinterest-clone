import "./App.css";
import Header from "./components/Header";
import Mainboard from "./components/Mainboard";
import unsplash from "./api/unsplash";

function App() {
  return (
    <div className="app">
      <Header />
      <Mainboard />
    </div>
  );
}

export default App;
