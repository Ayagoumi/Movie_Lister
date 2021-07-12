import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";

const BoxOffice = () => {
  const [data, setData] = useState([]);

  const getBoxOffices = async () => {
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
      .then((response) => {
        console.log(response.data.movie_results);
        const boxOfficeMovies = response.data.movie_results;
        return boxOfficeMovies;
        // setData(boxOfficeMovies);
        // Object.assign(data, boxOfficeMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getfullData = async () => {
    const moviesss = getBoxOffices();
    console.log("data", moviesss);
  };

  useEffect(() => {
    getfullData();
  }, []);

  //   useEffect(() => {
  //     console.log("movies", data);
  //   }, [data]);

  return (
    <div className="min-h-screen h-screen w-screen bg-gray-300">
        <div className="fixed top-0 flex flex-row items-center justify-between px-16 h-16 bg-red-50 w-full">
          <h1>Movie Lister</h1>
        </div>
      <div className="min-h-screen w-screen bg-gray-300 pt-12">
        <div className="min-w-auto grid grid-flow-row grid-cols-5 gap-4 items-center justify-center mt-5">
          <div className="w-screen bg-red-50">
            {data && <Card data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxOffice;
