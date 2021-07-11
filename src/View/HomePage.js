import React, { useState, useEffect} from "react";
import axios from "axios";
// import MovieList from "../Components/MovieList";
// import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
  const getBoxOffices = () => {
    var options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { type: "get-boxoffice-movies", page: "1" },
      headers: {
        "x-rapidapi-key": "4ccc11616emsha0ff93487313f1ep1528a9jsnf24cc1750061",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.movie_results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getBoxOffices();
  }, []);

  return (
    <div>
      <div className="min-h-screen w-screen bg-gray-300 pt-12">
        <div className="min-w-auto grid grid-flow-row grid-cols-5 gap-4 items-center justify-center mt-5">
          <div className="w-screen bg-red-50">
            <div>{movies.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
