import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movies/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrendingMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <span>Trending</span>

      <div class="container mx-auto">
        {trendingMovies.map((movie) => (
          <div class="inline-block px-2 w-72 h-64">
            <div
              class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt="movieimage"
                class="w-full h-64"
              />
              {/* <div class="p-4">
                <p class="font-medium text-lg">
                  Title:{" "}
                  <span class="font-normal text-base leadin-relaxed">
                    {movie.title}
                  </span>
                </p>
                <p class="font-medium text-lg">
                  Year of Release:{" "}
                  <span class="font-normal text-base">
                    {movie.release_date}
                  </span>
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
