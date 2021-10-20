import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCardMap from "../Components/skeletonCardMap";
import { ViewListIcon, VideoCameraIcon } from "@heroicons/react/outline";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selection, setSelection] = useState("all");
  const [isLoading, setLoading] = useState(true);

  const getMovies = async () => {
    setSelection("movie");
    setLoading(true);
    setTrendingMovies([]);
  };
  const getAll = async () => {
    setSelection("all");
    setLoading(true);
    setTrendingMovies([]);
  };
  const getTv = async () => {
    setSelection("tv");
    setLoading(true);
    setTrendingMovies([]);
  };

  const fetchTrendingMovies = async (selection) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${selection}/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingMovies(selection);
  }, [selection]);
  return (
    <div className="container w-screen p-6 2xl:px-3 px-6 mx-auto">
      <div className="inline sm:flex mb-5">
        <h2 className="text-2xl font-bold text-gray-400 mr-4 border-b-2 border-gray-50 border-opacity-5">
          Trending
        </h2>
        <div className="flex flex-row gap-4 h-8 my-4 sm:my-0">
          <button
            className="flex bg-gray-200 px-3 rounded-md text-sm leading-4 py-2 all-button"
            onClick={getAll}
          >
            All
          </button>
          <button
            className="flex bg-gray-200 px-3 rounded-md text-sm leading-4 py-2 movie-button"
            onClick={getMovies}
          >
            <VideoCameraIcon className="w-4" />
            Movies
          </button>
          <button
            className="flex bg-gray-200 px-3 rounded-md text-sm leading-4 py-2 tv-button"
            onClick={getTv}
          >
            <ViewListIcon className="w-4" />
            Series
          </button>
        </div>
      </div>
      {isLoading ? (
        <SkeletonCardMap />
      ) : (
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
          {trendingMovies.map((movie, idx) => (
            <div key={idx}>
              <div
                className="flex flex-col items-center relative overflow-hidden text-gray-400 transition duration-500 ease-in-out transform rounded-md shadow-md"
                data-movie-id={movie.id}
              >
                <div className="absolute bottom-0 left-0 right-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-gray-900 via-gray-600 to-transparent h-3/4 opacity-75"></div>
                <div className="w-full h-full">
                  <div className="flex absolute top-0 right-0 m-4 bg-white w-8 text-black justify-center rounded-md shadow-md">
                    {movie.vote_average}
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="object-cover h-full inset-0 w-full"
                  />
                </div>
              </div>
              <div className="w-full truncate text-md text-gray-400 mt-2">
                {movie.title ? movie.title : movie.name}
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-400 text-xs">
                  {movie.release_date
                    ? movie.release_date.substring(0, 4)
                    : movie.first_air_date.substring(0, 4)}
                </span>
                <div
                  className="rounded-md px-2 text-xs text-gray-400 border-gray-300"
                  style={{ borderWidth: "1.5px" }}
                >
                  {movie.media_type}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
