import React from "react";
import TrendingComponent from "./Components/TrendingComponent";
import Trending from "./Components/Trending";
import "./App.css";

function App() {
  return (
    <div className="w-screen bg-gray-800">
      <TrendingComponent />
      <Trending/>
    </div>
  );
}

export default App;
