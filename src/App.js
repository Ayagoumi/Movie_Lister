import React from "react";
import "./App.css";
// import HomePage from "./View/HomePage";
// import Page404 from "./View/Page404";
// import Search from "./View/Search";
// import Trending from "./View/Trending";
// import Series from "./View/Series";
// import Movies from "./View/Movies";
// import BoxOffice from "./View/BoxOffice";
// import MainNav from "./Components/MainNav";
import { BrowserRouter as Router/*, Switch, Route*/ } from "react-router-dom";
import TrendingComponent from "./Components/TrendingComponent";
import MoviesComponents from "./Components/MoviesComponents";

function App() {
  return (
    <Router>
      {/* <div className="min-h-screen h-screen w-screen bg-gray-300">
        <div className="fixed top-0 flex flex-row items-center justify-between px-16 h-16 bg-red-50 w-full">
          <h1>Movie Lister</h1>
        </div> */}
      <div className="w-screen">
        <TrendingComponent />
        <MoviesComponents />
      </div>
      {/* <Switch className="pt-44">
        <Route path="/series" component={Series} />
        <Route path="/movies" component={Movies} />
        <Route path="/boxoffice" component={BoxOffice} />
        <Route path="/trending" component={Trending} />
        <Route path="/" component={Search} exact />
        <Route component={Page404} />
      </Switch>
      <MainNav /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
