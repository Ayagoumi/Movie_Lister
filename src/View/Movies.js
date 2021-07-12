import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);

  const fetchUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    console.log(data);
    setUpcomingMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  return (
    <div className="min-h-screen h-screen w-screen bg-gray-300">
      <div className="fixed top-0 flex flex-row items-center justify-between px-16 h-16 bg-red-50 w-full">
        <h1>Movie Lister</h1>
      </div>
      <span>Popular Movies</span>

      <div className="container mx-auto">
        {UpcomingMovies?.map((movie) => (
          <div className="inline-block px-2 w-72 h-64">
            <div
              className="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt="movieimage"
                className="w-full h-64"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
